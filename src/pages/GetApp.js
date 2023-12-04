import React, { useEffect } from "react";
// import Loader from "../components/Loader";

const GetApp = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const platform = window.navigator.platform.toLocaleLowerCase();

      let url = "https://apps.apple.com/app/xutul/id6443713799";
      if (platform.includes("linux") || platform.includes("android")) {
        url = "https://play.google.com/store/apps/details?id=com.bidmind.xutul";
      }
      window.location.href = url;
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen bg-[#f0784e] text-white py-[260px] px-[70px] text-center">
      Түр хүлээнэ үү ...
      <br />
      <br />
      Апп татах хуудасруу шилжүүлж байна!
      <br />
      {/* <Loader show={true} /> */}
    </div>
  );
};

export default GetApp;
