const NAMES = ['Глеб Голубин', 'Гончаров Илья', 'Владимиров Николай', 'Щербаков Иван', 'Климов Роман', 'Самсонов Даниэль', 'Федоров Роман', 'Ефремов Даниил', 'Старостин Максим'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const DESCRIPTIONS = ['Улыбка на миллион','Хорошее фото','Коммутатор'];

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const CountLike = {
  MIN: 15,
  MAX: 200
};

const CountComment = {
  MIN: 0,
  MAX: 23
};

const DEFAULT_RENDERED_COMMENTS = 5;
const MAX_COUNT_PHOTOS = 25;
const STEP_ADDED_COMMENTS = 5;
const MAX_STRING_LENGTH = 140;
const MAX_COUNT_HASHTAG = 5;
const MAX_HASHTAG_LENGTH = 20;

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

export { NAMES, MESSAGES, DESCRIPTIONS, AvatarNumber, CountLike, CountComment, DEFAULT_RENDERED_COMMENTS, MAX_COUNT_PHOTOS, STEP_ADDED_COMMENTS, MAX_STRING_LENGTH, MAX_COUNT_HASHTAG, MAX_HASHTAG_LENGTH, MessageError };
