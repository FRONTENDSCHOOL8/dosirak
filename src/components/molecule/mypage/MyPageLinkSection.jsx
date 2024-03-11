import MyPageLinkItem from '@/components/atom/mypage/MyPageLinkItem';

const MyPageLinkSection = ({ linkItem }) => {
  return (
    <section className="noto bg-white text-label text-gray700">
      {linkItem.map((item, index) => (
        <MyPageLinkItem key={index} path={item.path}>
          {item.name}
        </MyPageLinkItem>
      ))}
    </section>
  );
};

export default MyPageLinkSection;
