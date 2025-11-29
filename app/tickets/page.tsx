import React, { FC } from "react";
import Tickets from "./components/tickets";
import CurrentData from "./components/currentData";
import ShopNow from "./components/shopNow";

const Page: FC = () => {
  return (
    <div>
      <Tickets />
      <CurrentData />
      <ShopNow />
    </div>
  );
};

export default Page;
