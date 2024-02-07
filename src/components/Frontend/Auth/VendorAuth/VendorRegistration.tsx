import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../form/PHForm";
import PHInput from "../../../form/PHInput";
import PHDatePicker from "../../../form/PHDatePicker";
import { Input } from "@material-tailwind/react";
import PHSelect from "../../../form/PHSelect";
import { Button } from "flowbite-react";
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
          <PHSelect options={genderOptions} name="gender" label="Gender" />
        </div>
        <div>
          <PHDatePicker name="dateOfBirth" label="Date of birth" />
        </div>
        <div>
          <Controller
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <Input
                crossOrigin={true}
                type="file"
                value={value?.fileName}
                {...field}
                onChange={(e) => onChange(e.target.files?.[0])}
              />
            )}
          />
        </div>
      </div>
      <hr className="my-2" />
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
          <PHInput type="text" name="presentAddress" label="Present Address" />
        </div>
        <div>
          <PHInput
            type="text"
            name="permanentAddress"
            label="Permanent Address"
          />
        </div>
      </div>
      <hr className="my-2" />
      <div>
        <div>
          <PHInput type="text" name="guardian.fatherName" label="Father Name" />
        </div>
        <div>
          <PHInput
            type="text"
            name="guardian.fatherOccupation"
            label="Father Occupation"
          />
        </div>
        <div>
          <PHInput
            type="text"
            name="guardian.fatherContactNo"
            label="Father ContactNo"
          />
        </div>
        <div>
          <PHInput type="text" name="guardian.motherName" label="Mother Name" />
        </div>
        <div>
          <PHInput
            type="text"
            name="guardian.motherOccupation"
            label="Mother Occupation"
          />
        </div>
        <div>
          <PHInput
            type="text"
            name="guardian.motherContactNo"
            label="Mother ContactNo"
          />
        </div>
      </div>
      <hr className="my-2" />
      <div>
        <div>
          <PHInput type="text" name="localGuardian.name" label="Name" />
        </div>
        <div>
          <PHInput
            type="text"
            name="localGuardian.occupation"
            label="Occupation"
          />
        </div>
        <div>
          <PHInput
            type="text"
            name="localGuardian.contactNo"
            label="Contact No."
          />
        </div>
        <div>
          <PHInput type="text" name="localGuardian.address" label="Address" />
        </div>
      </div>
      <Button>Submit</Button>
    </PHForm>
  );
};

export default VendorRegistration;
