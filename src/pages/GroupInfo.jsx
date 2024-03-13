import NavBar from '@/components/molecule/navbar/NavBar';
import { useLoginUserInfo } from '@/hook';
import { Link, useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { groupFeedPath } from './GroupFeed';
import MainNavBar from '@/components/molecule/common/MainNavBar';
import { getPbImage, pb } from '@/util';
import { useQuery } from '@tanstack/react-query';
import { getDateHangul } from '@/util/getDate';

const fetchLeaveGroup = async (cachedGroupInfoData, userId) => {
  const currentParticipant = cachedGroupInfoData.participant;
  const nextParticipant = currentParticipant.filter((v) => v != userId);

  const result = await pb.collection('groups').update(cachedGroupInfoData.id, {
    participant: nextParticipant,
  });

  return result;
};

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const { groupId } = useParams();
  const groupInfoData = useLoaderData();

  const { data: cachedGroupInfoData } = useQuery({
    ...getQueryOptions(groupId),
    staleTime: 1000 * 30,
    initialData: groupInfoData,
  });

  const handleLeaveGroup = async () => {
    if (confirm('모임에서 나가시겠어요?')) {
      await fetchLeaveGroup(cachedGroupInfoData, userInfo.id);

      alert('모임을 탈퇴하셨어요.\n지금 인기있는 모임들을 보여드릴게요!');
      navigate('/group/popular', { replace: true });
    }
  };

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col pb-[125px]">
        <h1 className="sr-only">모임</h1>
        <header>
          <NavBar type="feed" path={groupFeedPath(groupId)}>
            <div className="relative -left-[6px] flex items-center gap-3">
              <Link to={'/group/popular'}>
                <img src="/assets/common/prev.svg" alt="뒤로가기" />
              </Link>
              {cachedGroupInfoData.title}
            </div>
          </NavBar>
        </header>
        <main className="noto flex flex-col gap-4 px-6 pt-36">
          <h2 className="sr-only">모임 정보</h2>
          <img
            className="rounded-2xl"
            src={cachedGroupInfoData.thumbnail}
            alt=""
          />
          <div className="flex h-9 justify-between border-b-[1px] border-b-primary-color text-paragraph-lg">
            <span>모임 명</span>
            <span className="text-secondary-color">
              {cachedGroupInfoData.title}
            </span>
          </div>
          <div className="flex h-9 justify-between border-b-[1px] border-b-primary-color text-paragraph-lg">
            <span>생성일</span>
            <span className="text-secondary-color">
              {getDateHangul(cachedGroupInfoData.created)}
            </span>
          </div>
          <div className="flex h-9 justify-between border-b-[1px] border-b-primary-color text-paragraph-lg">
            <span>모임 태그</span>
            <span className="text-secondary-color">
              {cachedGroupInfoData.hashTag.hashTag.join(', ')}
            </span>
          </div>
          <div className="flex h-9 justify-between border-b-[1px] border-b-primary-color text-paragraph-lg">
            <button
              onClick={handleLeaveGroup}
              type="button"
              className="text-secondary-color"
            >
              탈퇴하기
            </button>
          </div>
        </main>
      </section>
      <MainNavBar />
    </>
  );
};

const getQueryOptions = (groupId) => {
  const queryOptions = {
    queryKey: ['groupInfo', groupId],
    queryFn: fetchGroupInfo(groupId),
  };

  return queryOptions;
};

const fetchGroupInfo = (groupId) => async () => {
  const groupInfo = await pb.collection('groups').getOne(groupId);
  const groupThumbnail = getPbImage(groupInfo);

  return {
    ...groupInfo,
    thumbnail: groupThumbnail,
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { groupId } = params;

    return await queryClient.ensureQueryData(getQueryOptions(groupId));
  };

Component.displayName = 'GroupInfo';
