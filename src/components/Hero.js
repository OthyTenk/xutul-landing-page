import React from "react";
import getAppQr from "../assets/images/get-app-qr.png";
import intro2 from "../assets/images/hero/intro-2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#f0784e] pt-[100px] lg:pt-[180px] pb-[120px] w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-[40%] flex flex-col justify-center antialiased">
            <div className="hidden lg:flex px-[90px] flex-col mb-6 hover:-mt-1 hover:mb-7 duration-300">
              <div className="w-fit bg-white py-1 px-2 rounded-xl hover:shadow-lg">
                <span className="text-black pl-8">Апп татах</span>
                <img
                  src={getAppQr}
                  width="140"
                  height="140"
                  alt="Xutul app суулгах"
                />
              </div>
            </div>

            <h1 className="text-center lg:text-start uppercase text-white text-3xl lg:text-4xl font-normal">
              Бүртгэлээ хөтлөөд амжилтанд хүр ...
            </h1>
            <p className="text-white mt-6 text-center lg:text-start">
              Таны бизнесийн хүчирхэг туслах байх болно.
            </p>

            <div className="flex flex-col w-full md:w-fit mt-8 mx-auto md:flex-row lg:mx-0">
              <a
                href="https://apps.apple.com/app/xutul/id6443713799"
                target="blank"
                className="bg-white flex flex-row justify-center gap-2 text-[#f0784e] border-2 border-white rounded-2xl px-7 py-3 hover:bg-black hover:border-black hover:text-white mr-3 mt-2 text-center hover:shadow-lg hover:mt-1 hover:mb-1 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="25"
                  viewBox="0 0 496.255 608.728"
                >
                  <path
                    d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
                    fill="#f0784e"
                  />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bidmind.xutul"
                target={"blank"}
                className="bg-[#f0784e] flex flex-row justify-center gap-2 border-white border-2 text-white rounded-2xl px-7 py-3 hover:bg-white hover:text-[#f0784e] hover:shadow-lg mr-3 mt-2 text-center hover:mt-1 hover:mb-1 duration-300"
              >
                <svg
                  height="25"
                  viewBox="0 -0.5 408 467.80000000000007"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x2="261.746"
                    y1="112.094"
                    y2="112.094"
                  >
                    <stop offset="0" stopColor="#63be6b" />
                    <stop offset=".506" stopColor="#5bbc6a" />
                    <stop offset="1" stopColor="#4ab96a" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    gradientUnits="userSpaceOnUse"
                    x1=".152"
                    x2="179.896"
                    y1="223.393"
                    y2="223.393"
                  >
                    <stop offset="0" stopColor="#3ec6f2" />
                    <stop offset="1" stopColor="#45afe3" />
                  </linearGradient>
                  <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1="179.896"
                    x2="407.976"
                    y1="229.464"
                    y2="229.464"
                  >
                    <stop offset="0" stopColor="#faa51a" />
                    <stop offset=".387" stopColor="#fab716" />
                    <stop offset=".741" stopColor="#fac412" />
                    <stop offset="1" stopColor="#fac80f" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    gradientUnits="userSpaceOnUse"
                    x1="1.744"
                    x2="272.296"
                    y1="345.521"
                    y2="345.521"
                  >
                    <stop offset="0" stopColor="#ec3b50" />
                    <stop offset="1" stopColor="#e7515b" />
                  </linearGradient>
                  <path
                    d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7z"
                    fill="url(#a)"
                  />
                  <path
                    d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1z"
                    fill="url(#b)"
                  />
                  <path
                    d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z"
                    fill="url(#c)"
                  />
                  <path
                    d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4z"
                    fill="url(#d)"
                  />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          <div className="lg:w-[60%]">
            <img
              src={intro2}
              alt="screen"
              className="hover:scale-[99%] transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
