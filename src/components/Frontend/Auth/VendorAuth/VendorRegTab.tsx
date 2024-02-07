import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Tabs as MTTabs,
  Tab,
  TabPanel,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import VendorRegStepper from "./VendorRegStepper";
import { Card } from "./VendorAuthCard";
import VendorTerms from "./VendorTerms";
import VendorRegistration from "./VendorRegistration";
import React from "react";

const VendorRegTab = () => {
  const data = [
    {
      label: "Vendor Registration",
      value: "add-vendor",
      icon: UserCircleIcon,
      desc: (
        <Card>
          <VendorRegStepper
            steps={[
              {
                value: 0,
                name: "Terms and Conditions",
                component: <VendorTerms />,
              },
              {
                value: 1,
                name: "Vendor Form",
                component: <VendorRegistration />,
              },
            ]}
          />
        </Card>
      ),
    },
  ];
  return (
    <MTTabs value={"add-vendor"}>
      <TabsHeader placeholder={""}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </MTTabs>
  );
};

export default VendorRegTab;
