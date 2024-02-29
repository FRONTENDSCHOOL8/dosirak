import MainNavItem from '@/components/atom/common/MainNavItem';
import { MENU_LIST } from '@/components/atom/common/MainMenuList';

const MainNavBar = () => {
  return (
    <section className="mobile:w-full fixed bottom-0 flex h-[95px] w-[430px] justify-center px-[45px] pb-[35px] pt-5 shadow-[0_-4px_4px_0_rgba(204,204,204,0.25)]">
      <h2 className="sr-only">메인 네비게이션</h2>
      <div className="flex h-[42px] w-[340px] items-center justify-between">
        {MENU_LIST.map((item) => (
          <MainNavItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MainNavBar;
