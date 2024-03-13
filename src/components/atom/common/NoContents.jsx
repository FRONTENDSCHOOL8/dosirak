const NoContents = ({ type }) => {
  let text = '';
  if (type === 'groupFeed') {
    text = '모임의 첫 게시글을 올려보세요!';
  } else if (type === 'following') {
    text = '팔로우 중인 유저가 없어요!';
  }

  return (
    <li className="noto absolute left-1/2 top-1/2 -translate-x-1/2 font-semibold text-content-color">
      {text}
    </li>
  );
};

export default NoContents;
