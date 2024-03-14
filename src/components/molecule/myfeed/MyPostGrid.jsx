import { useLoginUserInfo } from '@/hook';

const MyPostGrid = ({ feed }) => {
  const userInfo = useLoginUserInfo();
  return (
    <ul className="grid grid-cols-3 pb-[125px]">
      {feed.map((item) => (
        <li className="size-[118px]">
          <img src={item.images[0]} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default MyPostGrid;
