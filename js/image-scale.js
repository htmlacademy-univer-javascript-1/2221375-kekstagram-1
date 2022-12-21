import { imgPreview } from './user-photo.js';

const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const scaleValue = document.querySelector('.scale__control--value');
const scaleContainer = document.querySelector('.img-upload__scale');

const onScaleContainerClick = (evt) => {
  const scaleInput = Number.parseInt(scaleValue.value, 10);
  let scalePercent = Scale.MAX;
  const buttonScale = evt.target;

  if (buttonScale.tagName !== 'BUTTON') {
    return;
  }

  if (buttonScale.classList.contains('scale__control--bigger')) {
    scalePercent =  Math.min(scaleInput + Scale.STEP, Scale.MAX);
    scaleValue.value = `${scalePercent}%`;
  }

  else {
    scalePercent = Math.max(scaleInput - Scale.STEP, Scale.MIN);
    scaleValue.value = `${scalePercent}%`;
  }

  imgPreview.style.transform = `scale(${scalePercent / 100})`;
};

const initScaleContainer = () => {
  scaleContainer.addEventListener('click', onScaleContainerClick);
};

const removeScaleContainer = () => {
  scaleContainer.removeEventListener('click', onScaleContainerClick);
};

export { initScaleContainer, removeScaleContainer };
