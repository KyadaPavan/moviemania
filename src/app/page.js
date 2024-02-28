import React from "react";
import Herosection from "./components/Herosection";

const page = () => {
  return (
    <div>
      <Herosection title={"Let's watch movies together"} imageUrl={"/about.svg"} />
    </div>
  );
};

export default page;
