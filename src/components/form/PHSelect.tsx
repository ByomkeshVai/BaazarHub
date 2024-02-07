import { Option, Select } from "@material-tailwind/react";
import { Controller } from "react-hook-form";

type PHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const PHSelect = ({ label, name, options, disabled }: PHSelectProps) => {
  return (
    <Controller
      rules={{
        required: true,
      }}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <Select
            placeholder={""}
            label={label}
            {...field}
            style={{ width: "100%" }}
            disabled={disabled}
          >
            {options?.map((option) => (
              <Option>{option?.value}</Option>
            ))}
          </Select>
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </>
      )}
    />
  );
};

export default PHSelect;
