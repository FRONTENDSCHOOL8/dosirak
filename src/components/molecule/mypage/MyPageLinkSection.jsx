import MyPageLinkItem from '@/components/atom/mypage/MyPageLinkItem';

const MyPageLinkSection = ({ linkItem, children }) => {
  return (
    <section className="noto bg-white text-label text-gray700">
      {linkItem.map((item, index) => (
        <MyPageLinkItem key={index} path={item.path}>
          {item.name}
        </MyPageLinkItem>
      ))}
      {children}
    </section>
  );
};

export default MyPageLinkSection;
