const EtcSetting = () => {
  return (
    <section className="px-9 pt-8">
      <div className="flex flex-col gap-4 border-b-[1px] pb-8">
        <h2 className="text-paragraph-base text-gray600">기타</h2>
        <div className="flex justify-between text-paragraph-lg">
          <span>언어</span>
          <span className="text-secondary-color">한국어</span>
        </div>
        <div className="flex justify-between text-paragraph-lg">
          <button type="button">캐시 데이터 삭제하기</button>
        </div>
        <div className="flex justify-between text-paragraph-lg">
          <span>현재 버전</span>
          <span className="text-secondary-color">24.0.6.1</span>
        </div>
      </div>
    </section>
  );
};

export default EtcSetting;
