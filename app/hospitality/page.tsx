import React, { FC } from "react";
import Hospitality from "./components/hospitality";
import InformatinBooking from "./components/informatinBooking";
import HospitalityMatches from "./components/hospitalityMatches";

const Page: FC = () => {
  return (
    <div>
      <Hospitality />
      <InformatinBooking />
      <HospitalityMatches />
    </div>
  );
};

export default Page;
