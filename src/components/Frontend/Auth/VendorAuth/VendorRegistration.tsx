import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../form/PHForm";
import PHInput from "../../../form/PHInput";
import { Button, Input, Typography } from "@material-tailwind/react";
import PHSelect from "../../../form/PHSelect";
import { genderOptions } from "../../../../constant/constant";

const VendorRegistration = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const vendorData = {
      vendor: data,
    };
    console.log(vendorData);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div className="grid grid-cols-3 gap-5 mx-auto">
        <div>
          <div>
            <PHInput type="text" name="name.firstName" label="First Name" />
          </div>
          <div>
            <PHInput type="text" name="name.middleName" label="Middle Name" />
          </div>
          <div>
            <PHInput type="text" name="name.lastName" label="Last Name" />
          </div>
          <div>
            <Controller
              name="vendorImg"
              render={({ field: { onChange, value, ...field } }) => (
                <>
                  <Typography placeholder="" variant="h6" className="mb-1">
                    Vendor Image
                  </Typography>
                  <Input
                    crossOrigin={true}
                    type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                </>
              )}
            />
          </div>
          <div>
            <PHSelect options={genderOptions} name="gender" labels="Gender" />
          </div>
          <div>
            <PHInput type="string" name="dateOfBirth" label="Date of birth" />
          </div>
          <div>
            <Controller
              name="shopImg"
              render={({ field: { onChange, value, ...field } }) => (
                <>
                  <Typography placeholder="" variant="h6" className="mb-1">
                    Shop Image
                  </Typography>
                  <Input
                    crossOrigin={true}
                    type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                </>
              )}
            />
          </div>
        </div>

        <div>
          <div>
            <PHInput type="text" name="email" label="Email" />
          </div>
          <div>
            <PHInput type="text" name="contactNo" label="Contact" />
          </div>
          <div>
            <PHInput
              type="text"
              name="emergencyContactNo"
              label="Emergency Contact"
            />
          </div>
          <div>
            <PHInput
              type="text"
              name="presentAddress"
              label="Present Address"
            />
          </div>
          <div>
            <PHInput
              type="text"
              name="permanentAddress"
              label="Permanent Address"
            />
          </div>
        </div>

        <div>
          <div>
            <PHInput type="text" name="shop.name" label="Shop Name" />
          </div>
          <div>
            <PHInput type="text" name="shop.shopAddress" label="Shop Address" />
          </div>
          <div>
            <PHInput
              type="text"
              name="shop.shopContactNo"
              label="Shop Contact No"
            />
          </div>

          <div>
            <PHInput
              type="text"
              name="shop.shopCategory"
              label="Shop Category"
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        placeholder={""}
        variant="gradient"
        color="green"
        className="w-full mx-auto"
      >
        Submit
      </Button>
    </PHForm>
  );
};

export default VendorRegistration;
