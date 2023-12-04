import React from "react";
import monpay from "../assets/images/third/monpay.jpg";

function MonpayCard() {
  return (
    <div className="flex mt-8">
      <div
        className={`p-8 border-[#eee] rounded-2xl bg-white border hover:-mt-2 hover:mb-2 hover:shadow-md duration-300 w-full $`}
      >
        <div className="flex flex-col items-center grayscale">
          <img src={monpay} className="w-[100px] fill-slate-400" alt="Monpay" />
        </div>
      </div>
    </div>
  );
}

export default MonpayCard;
