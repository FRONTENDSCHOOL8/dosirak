import ParticipateInfo from './ParticipateInfo';

const RandomRecipe = () => {
  return (
    <section className="mt-[13px] flex">
      <ParticipateInfo number={2}>모임</ParticipateInfo>
      <ParticipateInfo number={8}>피드</ParticipateInfo>
    </section>
  );
};

export default RandomRecipe;
