import { Stepper as MTStepper, Step } from "@material-tailwind/react";
import { useAppSelector } from "../../../../redux/hook";

const VendorRegStepper = ({ steps }) => {
  const { activeStep } = useAppSelector((state) => state.stepper);
  return (
    <div className="w-full px-8 py-4">
      <MTStepper placeholder={""} activeStep={activeStep}>
        {steps.map(({ value, name }) => (
          <Step
            placeholder={""}
            key={value}
            className="px-4 cursor-pointer w-fit"
            // onClick={() => dispatch(setActiveStep(value))}
          >
            {name}
          </Step>
        ))}
      </MTStepper>

      <div className="mt-16">{steps[activeStep].component}</div>
    </div>
  );
};

export default VendorRegStepper;
