type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="mt-4 ">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
