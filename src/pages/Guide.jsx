import { useEffect } from "react";
import Loader from "../components/Loader";

const Guide = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "https://xutul.mn/guides/index.html";
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen bg-[#f0784e] text-white py-[260px] px-[70px] text-center">
      Түр хүлээнэ үү ...
      <br />
      <Loader show={true} />
    </div>
  );
};

export default Guide;
