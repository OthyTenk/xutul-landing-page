import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const AuthLayout = ({
  title,
  subtitle,
  error,
  showLoader,
  titleContainerStyle,
  children,
}) => (
  <div className="h-100 flex flex-col items-center justify-center">
    <div className="w-[380px] flex flex-col gap-10 py-6 px-auto bg-white">
      {/* logo */}
      <div className="flex mt-[72px] items-center justify-center">
        <img
          className="w-50 h-16"
          alt="xutul.MN logo"
          src="assets/images/logo_02.png"
        />
      </div>

      {/* Title & Subtitle */}
      <div className="mt-6" style={{ ...titleContainerStyle }}>
        <h2 className="text-center text-xl font-semibold">{title}</h2>
        <p className="text-center mt-2">{subtitle}</p>
      </div>

      {/* Error Info */}
      {error && (
        <span className="text-xs bg-[#ff1717] text-white p-3 border-3 text-center">
          {error}
        </span>
      )}

      {children}

      <div className="flex flex-row justify-center">
        <Link
          target={"_blank"}
          to={"/terms"}
          style={{ textDecoration: "none" }}
        >
          <span className="text-[#898B9A] text-sm">Үйлчилгээний нөхцөл</span>
        </Link>
        <div
          style={{
            marginRight: 8,
            marginLeft: 8,
            padding: 0,
          }}
        >
          •
        </div>
        <Link
          target={"_blank"}
          to={"/policy"}
          style={{ textDecoration: "none" }}
        >
          <span className="text-[#898B9A] text-sm">Нууцлалын бодлого</span>
        </Link>
      </div>

      <div className="flex items-center justify-center h-10 text-[#898b9a]">
        BidMind
      </div>
    </div>
    {showLoader && <Loader show={showLoader} />}
  </div>
);

export default AuthLayout;
