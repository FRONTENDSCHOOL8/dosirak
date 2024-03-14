import HeaderButtonArea from '@/components/molecule/home/HeaderButtonArea';
import HeaderLogo from '@/components/molecule/home/HeaderLogo';

const HomeHeader = () => {
  return (
    <header className="fixed top-0 z-10 w-[430px] bg-white shadow-list mobile:w-screen">
      <nav className="relative flex h-20 items-end justify-between px-9 pb-[18px]">
        <HeaderLogo />
        <HeaderButtonArea />
      </nav>
    </header>
  );
};

export default HomeHeader;
