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

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;
checkStringLength('sdsdsd', 6);

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createCommentsArray  = () => {
  const comments = Array.from({length: 3});
  return comments.map((element, index) => createComment(index + 1));
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTION[0, DESCRIPTION.length - 1],
  likes: getRandomPositiveInteger(CountLike .MIN, CountLike .MAX),
  comments: createCommentsArray(),
});

const createArrayPhotos = () => {
  const photo  = Array.from({length: 25});
  return photo.map((element, index) => createPhoto(index + 1));
};

createArrayPhotos();
