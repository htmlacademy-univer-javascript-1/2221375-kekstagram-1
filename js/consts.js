const NAMES = ['Глеб Голубин', 'Гончаров Илья', 'Владимиров Николай', 'Щербаков Иван', 'Климов Роман', 'Самсонов Даниэль', 'Федоров Роман', 'Ефремов Даниил', 'Старостин Максим'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const DESCRIPTION = ['Улыбка на миллион','Хорошее фото','Коммутатор'];

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const CountLike  = {
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

export { NAMES, MESSAGES, DESCRIPTION, AvatarNumber, CountLike, CountComment, DEFAULT_RENDERED_COMMENTS, MAX_COUNT_PHOTOS, STEP_ADDED_COMMENTS };
