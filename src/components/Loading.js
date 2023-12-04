import React from "react";
import Loader from "./Loader";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-[#f0784e] text-white py-[260px] px-[70px] text-center flex flex-col items-center justify-center">
      Түр хүлээнэ үү ...
      <br />
      <br />
      Ачааллаж байна!
      <br />
      <Loader show={true} />
    </div>
  );
};

export default Loading;
