const DEFAULT_RENDERED_COMMENTS = 5;
const STEP_ADDED_COMMENTS = 5;
const MAX_STRING_LENGTH = 140;
const MAX_COUNT_HASHTAG = 5;
const MAX_HASHTAG_LENGTH = 20;
const ALERT_SHOW_TIME = 5000;
const TIMEOUT_DELAY = 500;

const MessageError = {
  START_WITH: 'Хэш-тег должен начинаться с символа #',
  INVALID_SYMBOLS: 'Строка после # должна состоять только из букв и чисел',
  ONLY_ONE_GRID: 'Хеш-тег не может состоять только из одной решётки',
  MAX_LENGTH_HASHTAG: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая #`,
  SPLIT_BY_SPACES: 'Хэш-теги разделяются пробелами',
  HASHTAG_NO_REPEAT: 'Один и тот же хэш-тег не может быть использован дважды',
  MAX_HASHTAG_COUNT: `Нельзя указать больше ${MAX_COUNT_HASHTAG} хэш-тегов`,
  MAX_LENGTH_COMMENT: `Максимальная длина комментария ${MAX_STRING_LENGTH} символов`
};

export { DEFAULT_RENDERED_COMMENTS, STEP_ADDED_COMMENTS, MAX_STRING_LENGTH, MAX_COUNT_HASHTAG, MAX_HASHTAG_LENGTH, ALERT_SHOW_TIME, MessageError, TIMEOUT_DELAY };
