import {getRandomNumber, getRandomArrayElement} from './util.js';

const descriptions = [
  'Прекрасный день на природе',
  'Небольшое путешествие',
  'Мой любимый момент',
  'Красивый закат',
  'Выходной с друзьями',
  'Незабываемые впечатления',
  'Немного летнего настроения',
  'Красота вокруг нас'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Мария',
  'Александр',
  'Екатерина',
  'Дмитрий',
  'Анна',
  'Максим',
  'София',
  'Иван',
  'Алина'
];

let commentId = 0;

const createComment = function () {
  let message = getRandomArrayElement(messages);

  if (getRandomNumber(0, 1) === 1) {
    message = `${message} ${getRandomArrayElement(messages)}`;
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(names)
  };
};

const createComments = function () {
  const comments = [];
  const commentsCount = getRandomNumber(0, 30);

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

const createPhoto = function (i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomNumber(15, 200),
    comments: createComments()
  };
};

const photos = [];

for (let i = 1; i <= 25; i++) {
  photos.push(createPhoto(i));
}

export {photos};
