const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export default function getDate(pbDate) {
  const date = new Date(pbDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${String(month).padStart(2, '0')}.${day} ${WEEKDAY[date.getDay()]}`;
}
