import React from "react";

const top1 = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="uppercase text-lg">your balance</h3>
        <h3 className="text-xl">$0.00</h3>
      </div>
      <div className="flex bg-white shadow-md space-x-7 px-8 py-4 text-lg">
        <div className="text-center">
          <h3 className="uppercase">income</h3>
          <p>$400</p>
        </div>
<div className="w-[1.5px] bg-black"></div>
        <div className="text-center">
          <h3 className="uppercase">expense</h3>
          <p>$400</p>
        </div>
      </div>
    </div>
  );
};

export default top1;
