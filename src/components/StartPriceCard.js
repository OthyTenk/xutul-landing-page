import React from "react";

function StartPriceCard({ title, description, price, buttonLabel }) {
  return (
    <div className="flex mt-8">
      <div
        className={`p-8 border-white rounded-2xl border hover:shadow-md duration-300 w-full bg-[#faebe3] text-[#333] -my-2 hover:-mt-4 hover:mb-2`}
      >
        <div className="flex flex-col items-center antialiased relative">
          <h3 className="text-lg mb-5 font-medium text-[#f0784e] uppercase">
            {title}
          </h3>
          <p className={`text-base text-center`}>{description}</p>

          <div className={`pt-8 flex items-end`}>
            <h3 className={`text-3xl font-light text-[#777]`}>{price}₮</h3>
            /сар
          </div>
          <div className={`pb-8 text-sm items-end italic text-black`}>
            Төлбөргүй ч байх боломжтой.
          </div>

          {/* <button
            className={buttonclassName}
            onClick={() =>
              navigation("https://login.xutul.mn/login", { replace: true })
            }
          >
            {buttonLabel}
          </button> */}
          <a
            href="https://login.xutul.mn/login?type=start"
            className="bg-white mt-2 border-[#f0784e] border text-sm font-medium text-[#f0784e] py-3 px-6 rounded-xl w-full text-center"
            target="blank"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default StartPriceCard;
