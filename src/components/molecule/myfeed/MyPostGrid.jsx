import { useLoginUserInfo } from '@/hook';

const MyPostGrid = ({ feed }) => {
  const userInfo = useLoginUserInfo();
  return (
    <section className="p-9">
      <ul className="grid grid-cols-3 gap-[2px] pb-[125px]">
        {feed.map((item) => (
          <li
            key={item.id}
            className="flex size-[118px] items-center justify-center"
          >
            <img className="size-full" src={item.images[0]} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyPostGrid;
