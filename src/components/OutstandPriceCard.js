import React from "react";

const OutstandPriceCard = ({ title, description, buttonLabel }) => {
  return (
    <div className="flex mt-8">
      <div
        className={`p-8 border-[#eee] rounded-2xl bg-white border hover:-mt-2 hover:mb-2 hover:shadow-md duration-300 w-full `}
      >
        <div className="flex flex-col items-center antialiased">
          <h3 className="text-lg mb-5 font-medium uppercase">{title}</h3>
          <p className={`text-base text-center text-[#888]`}>{description}</p>

          <div className={`py-8 flex items-end `}>
            <h3 className={`text-2xl font-light text-[#888]`}>
              Та саналаа илгээнэ үү
            </h3>
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
            href="outstand"
            className="bg-[#f0784e] uppercase text-sm text-white py-3 px-6 rounded-xl w-full text-center"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default OutstandPriceCard;
