const headArray = [
  '용감한',
  '뒹굴뒹굴',
  '엉뚱한',
  '맛있는',
  '수문장',
  '무시무시한',
  '초록색',
  '파란색',
  '배고픈',
  '다이어트중인',
  '멋쟁이',
  '오염된',
  '살찐',
  '바쁜',
  '한가한',
];

const tailArray = [
  '짱사랑',
  '별이',
  '장군이',
  '탕수육',
  '도시락',
  '가지',
  '브로콜리',
  '밤비',
  '키보드',
  '루피',
  '페페',
  '개구리',
  '범쌤',
  '야무쌤',
  '사자',
];

const randomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const randomNickName = () => {
  const randomHead = headArray[randomIndex(headArray.length)];
  const randomTail = tailArray[randomIndex(tailArray.length)];

  return `${randomHead} ${randomTail}`;
};

export default randomNickName;
