import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <h1>
      <Link>
        <img
          src="/assets/common/logo.svg"
          alt=""
          className="h-[40px] w-[74px]"
        />
      </Link>
    </h1>
  );
};

export default HeaderLogo;
