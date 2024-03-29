import { queryClient } from '@/App';
import ProfileModify from '@/components/organism/mypage/ProfileModify';
import PasswordModify from '@/components/organism/mypage/PasswordModify';

const navigationItems = [
  {
    id: 'cover',
    index: true,
    path: '',
    text: 'cover',
    lazy: () => import('@/components/atom/common/Splash'),
  },
  {
    id: 'home',
    index: true,
    path: '/home',
    text: '홈',
    lazy: () => import('@/pages/Home'),
  },
  {
    id: 'login',
    path: '/login',
    text: '로그인 화면',
    lazy: () => import('@/pages/Login'),
  },
  {
    id: 'register',
    path: '/register',
    text: '회원가입 화면',
    lazy: () => import('@/pages/Register'),
  },
  {
    id: 'group',
    path: '/group/:groupType',
    text: '모임 화면',
    async lazy() {
      const { Component, loader } = await import('@/pages/Group');

      return {
        loader: loader(queryClient),
        Component,
      };
    },
  },
  {
    id: 'groupadd',
    path: '/groupadd',
    text: '모임 생성 화면',
    lazy: () => import('@/pages/GroupAdd'),
  },
  {
    id: 'group-feed',
    path: '/group/detail/:groupId',
    text: '우리 한 끼 화면',
    async lazy() {
      const { Component } = await import('@/pages/GroupDetail');

      return {
        Component,
      };
    },
    children: [
      {
        id: 'group-detail-feed',
        path: '/group/detail/:groupId/feed',
        text: '그룹 상세 페이지 - 피드',
        async lazy() {
          const { Component, loader } = await import('@/pages/GroupFeed');

          return {
            loader: loader(queryClient),
            Component,
          };
        },
      },
      {
        id: 'group-detail-info',
        path: '/group/detail/:groupId/info',
        text: '그룹 상세 페이지 - 정보',
        async lazy() {
          const { Component, loader } = await import('@/pages/GroupInfo');

          return {
            loader: loader(queryClient),
            Component,
          };
        },
      },
    ],
  },
  {
    id: 'group-detail-write',
    path: '/group/detail/:groupId/write',
    text: '그룹 상세 페이지 - 글쓰기',
    lazy: () => import('@/pages/GroupFeedWrite'),
  },
  {
    id: 'feed',
    path: '/feed/:feedType',
    text: '피드 화면',
    async lazy() {
      const { Component, loader } = await import('@/pages/Feed');

      return {
        loader: loader(queryClient),
        Component,
      };
    },
    children: [
      {
        id: 'feed-comment',
        path: '/feed/:feedType/comment/:feedId',
        text: '피드 댓글',
        async lazy() {
          const { Component, loader } = await import(
            '@/components/organism/feed/FeedComment'
          );

          return {
            loader: loader(queryClient),
            Component,
          };
        },
      },
    ],
  },
  {
    id: 'feed-write',
    path: '/feed/write',
    text: '피드 글쓰기',
    lazy: () => import('@/pages/FeedWrite'),
  },
  {
    id: 'feed-search',
    path: '/feed/search',
    text: '피드 검색',
    lazy: () => import('@/pages/FeedSearch'),
  },
  {
    id: 'feed-search-result',
    path: '/feed/search/:keyword',
    text: '피드 검색 결과',
    async lazy() {
      const { Component, loader } = await import('@/pages/FeedSearchResult');

      return {
        loader: loader(queryClient),
        Component,
      };
    },
    children: [
      {
        id: 'feed-search-comment',
        path: '/feed/search/:keyword/comment/:feedId',
        text: '검색된 피드의 댓글',
        async lazy() {
          const { Component, loader } = await import(
            '@/components/organism/feed/FeedComment'
          );

          return {
            loader: loader(queryClient),
            Component,
          };
        },
      },
    ],
  },
  {
    id: 'mypage',
    path: '/mypage',
    text: '마이페이지 화면',
    lazy: () => import('@/pages/MyPage'),
    children: [
      {
        id: 'profile-modify',
        path: 'profile',
        text: '프로필 변경 화면',
        element: <ProfileModify />,
      },
      {
        id: 'password-modify',
        path: '/mypage/password',
        text: '비밀번호 변경 화면',
        element: <PasswordModify />,
      },
    ],
  },
  {
    id: 'settings',
    path: '/settings',
    text: '설정 화면',
    lazy: () => import('@/pages/Settings'),
  },
];

export default navigationItems;
