import CurrentStep from '@/components/atom/register/CurrentStep';

const SectionInfo = ({ children }) => {
  return (
    <h2 className="font-Gong-Gothic-l text-heading-lg">
      <CurrentStep />
      {children}
    </h2>
  );
};

export default SectionInfo;
