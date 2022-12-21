import { isEscapeKey, checkStringLength } from './utils.js';
import { MAX_STRING_LENGTH, MAX_COUNT_HASHTAG, MAX_HASHTAG_LENGTH, MessageError } from './consts.js';
import { onScaleButtonClick, scaleContainer } from './image-scale.js';
import { onFilterButtonChange, effectList, sliderWrapper, initEffects } from './effect-filters.js';
import { sendData } from './api.js';
import { renderMessage } from './messages.js';

const body = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');
const imgUploadField = document.querySelector('#upload-file');
const editImg = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

const closeForm  = () => {
  editImg.classList.add('hidden');
  body.classList.remove('modal-open');
  scaleContainer.removeEventListener('click', onScaleButtonClick);
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  effectList.removeEventListener('change', onFilterButtonChange);
};

const closeFormWithDefaultSettings  = () => {
  closeForm();
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  form.reset();
};

const onButtonEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFormWithDefaultSettings();
    document.removeEventListener('keydown', onButtonEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closeFormWithDefaultSettings();
  document.removeEventListener('keydown', onButtonEscKeydown);
};

const addFieldListeners = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onButtonEscKeydown);
  });
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onButtonEscKeydown);
  });
};

const buttonAdjustment = () => {
  submitButton.disabled = !pristine.validate();
};

const doActionWithClassHidden = () => imgPreview.hasAttribute('class') ? sliderWrapper.classList.remove('hidden') : sliderWrapper.classList.add('hidden');

const onImgUploadFieldchange = () => {
  editImg.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown',onButtonEscKeydown);
  doActionWithClassHidden();
  scaleContainer.addEventListener('click', onScaleButtonClick);
  effectList.addEventListener('change', onFilterButtonChange);
  addFieldListeners(commentsField);
  addFieldListeners(hashtagsField);
  buttonAdjustment();
};

const getUniqueHashtags = (hashtags) => {
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (string) => {
  errorMessage = '';

  const inputText = string.toLowerCase().trim();

  if(!inputText) {
    return true;
  }

  const inputHashtags = inputText.split(/\s+/);

  if(inputHashtags.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputHashtags.some((item) => item.indexOf('#', 1) >= 1),
      error: MessageError.SPLIT_BY_SPACES,
    },

    {
      check: inputHashtags.length > MAX_COUNT_HASHTAG,
      error: MessageError.MAX_HASHTAG_COUNT,
    },

    {
      check: inputHashtags.some((item) => item[0] !== '#'),
      error: MessageError.START_WITH,
    },

    {
      check: inputHashtags.some((item) => item.length === 1),
      error: MessageError.ONLY_ONE_GRID,
    },

    {
      check: inputHashtags.some((item) => item.length > MAX_HASHTAG_LENGTH),
      error: MessageError.MAX_LENGTH_HASHTAG,
    },

    {
      check: inputHashtags.some((item) => !/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(item)),
      error: MessageError.INVALID_SYMBOLS,
    },

    {
      check: !getUniqueHashtags(inputHashtags),
      error: MessageError.HASHTAG_NO_REPEAT,
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const commentHandler = (string) => {
  errorMessage = '';

  const inputText = string.trim();

  if(!inputText) {
    return true;
  }

  const rule = {
    check: !checkStringLength(inputText, MAX_STRING_LENGTH),
    error: MessageError.MAX_LENGTH_COMMENT,
  };

  const isInvalid = rule.check;
  if(isInvalid) {
    errorMessage = rule.error;
  }
  return !isInvalid;
};

const validateForm = () => {
  pristine.addValidator(hashtagsField, hashtagsHandler, error);
  pristine.addValidator(commentsField, commentHandler, error);
  buttonAdjustment();
};

const onHashtagInput = () => buttonAdjustment();

const onCommentInput = () => buttonAdjustment();

const setFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    submitButton.disabled = true;
    sendData(
      () => {
        onSuccess();
        renderMessage(true);
      },
      () => {
        onError();
        renderMessage();
      },
      new FormData(evt.target),
    );
  });
};

const renderUploadForm = () => {
  imgUploadField.addEventListener('change', onImgUploadFieldchange);
  hashtagsField.addEventListener('input', onHashtagInput);
  commentsField.addEventListener('input', onCommentInput);
  initEffects();
  validateForm();
  setFormSubmit(closeFormWithDefaultSettings, closeForm);
};

export { renderUploadForm, imgPreview };
