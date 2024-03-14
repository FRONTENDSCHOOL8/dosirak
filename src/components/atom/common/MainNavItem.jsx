import useFeedStore from '@/store/useFeedStore';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MainNavItem = ({ item }) => {
  const location = useLocation();
  const currentPage = '/' + location.pathname.split('/')[1];
  const itemPath = '/' + item.path.split('/')[1];

  const { setExpandFeed } = useFeedStore((state) => state);

  return (
    <NavLink to={item.path} onClick={() => setExpandFeed('')}>
      <figure className="flex w-10 flex-col items-center">
        <img
          className="size-6"
          src={`/assets/common/menubar/${currentPage === itemPath ? item.icon.select : item.icon.default}`}
          alt=""
        />
        <figcaption
          className={`w-32 text-nowrap text-center font-Gong-Gothic-l ${currentPage === itemPath ? 'text-primary-color' : 'text-gray500'}`}
        >
          {item.name}
        </figcaption>
      </figure>
    </NavLink>
  );
};

export default MainNavItem;
