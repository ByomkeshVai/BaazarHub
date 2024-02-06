import FormateTime from "../../../pages/ui/FormateTime";
import SectionHeader from "../../../pages/ui/SectionHeader";
import ViewMore from "../../../pages/ui/ViewMore";

const FlashSale = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <SectionHeader title={"Just For You"} />
        <FormateTime />
        <ViewMore title="View More" />
      </div>
    </>
  );
};

export default FlashSale;
