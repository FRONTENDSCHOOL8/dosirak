import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <h1>
      <Link>
        <img
          src="/assets/common/logo.svg"
          alt="한끼도시락"
          className="h-10 w-[74px]"
        />
      </Link>
    </h1>
  );
};

export default HeaderLogo;
