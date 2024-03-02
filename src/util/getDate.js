const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export default function getDate(pbDate, WEEK = true) {
  const date = new Date(pbDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')} ${WEEK ? WEEKDAY[date.getDay()] : ''}`;
}

export function getDateHangul(pbDate, isYear = true, WEEK = true) {
  const date = new Date(pbDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${isYear ? `${year}년 ` : ''}${month}월 ${day}일 ${WEEK ? WEEKDAY[date.getDay()] : ''}`;
}
