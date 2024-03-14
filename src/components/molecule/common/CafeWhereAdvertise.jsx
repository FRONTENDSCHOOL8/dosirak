import useCommonStore from '@/store/useCommonStore';

const CafeWhereAdvertise = () => {
  const setIsAdvertising = useCommonStore((state) => state.setIsAdvertising);

  const handleOpenCafeWhere = (e) => {
    if (e.target.closest('button')) return;
    console.log(e.target.closest('button'));

    window.open(
      'https://where-cafe.vercel.app/',
      '_blank',
      'noopener, noreferrer'
    );
  };

  const handleCloseAdvertise = (e) => {
    console.log(e.currentTarget);
    setIsAdvertising(false);
  };

  return (
    <div
      role="button"
      className="noto absolute left-1/4 top-1/4 flex w-60 flex-col items-center justify-center gap-4 rounded-2xl bg-[#ebd6c1] p-4"
      onClick={handleOpenCafeWhere}
    >
      <button
        type="button"
        className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-tertiary-color"
        onClick={handleCloseAdvertise}
      >
        <img className="size-3/4" src="/assets/common/delete.svg" alt="닫기" />
      </button>
      <p className="relative">
        <strong className="text-primary-color">도시락</strong> 먹을{' '}
        <strong className="text-amber-700">카페</strong>를 찾는다면?
      </p>
      <figure className="flex flex-col items-center justify-center gap-4">
        <img src="/assets/desktop/advertise.svg" alt="카페어디" />
        <figcaption>
          <strong className="w-full text-center text-amber-700">
            카페어디
          </strong>
          를 이용해 보세요!
        </figcaption>
      </figure>
    </div>
  );
};

export default CafeWhereAdvertise;
