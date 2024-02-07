import { Input, Typography } from "@material-tailwind/react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        rules={{
          required: true,
        }}
        name={name}
        render={({ field }) => (
          <>
            <Typography placeholder="" variant="h6" className="mb-1">
              {label}
            </Typography>
            <Input crossOrigin={true} {...field} type={type} id={name} />
          </>
        )}
      />
    </div>
  );
};

export default PHInput;
