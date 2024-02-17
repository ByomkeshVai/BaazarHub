/* eslint-disable @typescript-eslint/no-explicit-any */
import { Option, Select, Typography } from "@material-tailwind/react";
import { Controller } from "react-hook-form";

type PHSelectProps = {
  labels: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const PHSelect = ({ labels, name, options, disabled }: PHSelectProps) => {
  const itemData = options?.map((item: any) => (
    <Option key={item?.id} value={item?.value}>
      {item?.label}
    </Option>
  ));
  return (
    <Controller
      rules={{
        required: true,
      }}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <Typography placeholder="" variant="h6" className="mb-1">
            {labels}
          </Typography>
          <Select
            key={name}
            placeholder={""}
            label={`Select ${name}`}
            {...field}
            style={{ width: "100%" }}
            disabled={disabled}
          >
            {itemData ? itemData : ""}
          </Select>
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </>
      )}
    />
  );
};

export default PHSelect;
