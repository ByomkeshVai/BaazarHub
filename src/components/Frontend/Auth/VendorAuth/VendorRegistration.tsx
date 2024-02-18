import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../form/PHForm";
import PHInput from "../../../form/PHInput";
import { Button } from "@material-tailwind/react";
import PHSelect from "../../../form/PHSelect";
import { genderOptions } from "../../../../constant/constant";
import PHUploadForm from "../../../form/PHUploadForm";
import { useState } from "react";
import { useVendorRegistrationMutation } from "../../../../redux/features/vendor/vendorApi";
import { useNavigate } from "react-router-dom";

const VendorRegistration = () => {
  const navigate = useNavigate();
  const [vendorReg, { isSuccess }] = useVendorRegistrationMutation();
  const [vendorImage, setVendorImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const vendorData = {
      vendor: {
        ...data,
        shopImg: profileImage,
        vendorImg: vendorImage,
      },
    };

    vendorReg(vendorData);
    if (isSuccess) {
      navigate("/vendor/register-complete");
    }
  };
  return (
    <PHForm onSubmit={onSubmit} isSuccess={isSuccess}>
      <div className="grid grid-cols-3 gap-5 mx-auto">
        <div>
          <div>
            <PHInput type="text" name="username" label="Username" />
          </div>
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
            <PHUploadForm
              labels={"Vendor Image"}
              imageUrl={vendorImage}
              setImageUrl={setVendorImage}
              isSuccess={isSuccess}
            />
          </div>
          <div>
            <PHSelect options={genderOptions} name="gender" labels="Gender" />
          </div>
          <div>
            <PHInput type="string" name="dateOfBirth" label="Date of birth" />
          </div>
          <div>
            <PHUploadForm
              labels={"Shop Logo"}
              imageUrl={profileImage}
              setImageUrl={setProfileImage}
              isSuccess={isSuccess}
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
