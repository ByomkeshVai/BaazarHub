import { Controller } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { Typography } from "@material-tailwind/react";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const PHDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <>
            <Typography placeholder="" variant="h6" className="mb-1">
              {label}
            </Typography>
            <DayPicker {...field} style={{ width: "100%" }} />
          </>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
