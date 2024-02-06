type ViewMoreProps = {
  title: string;
};
const ViewMore = ({ title }: ViewMoreProps) => {
  return (
    <div className="px-4 py-1 font-bold border-2 border-red-700 cursor-pointer rounded-2xl text-slate-900">
      <h2 className="">{title}</h2>
    </div>
  );
};

export default ViewMore;
