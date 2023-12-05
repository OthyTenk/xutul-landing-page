import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo_02.png";
import white from "../assets/images/white-logo_02.png";

const menuData = [
  {
    url: "#home",
    label: "Эхлэл",
  },
  {
    url: "#features",
    label: "Боломж",
  },
  // {
  //   url: "./#customers",
  //   label: "Харилцагчид",
  // },
  {
    url: "#pricing",
    label: "Үнийн санал",
  },
  {
    url: "#channels",
    label: "Төлбөр авах сувгууд",
  },
];

const Header = () => {
  const [change, setChange] = useState(false);
  const [showSlide, setShowSlide] = useState(false);
  const location = useLocation();
  const hash = location.hash || '#home'

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) setChange(true);
      else setChange(false);
    });
  }, []);

  const renderLogo = () => (
    <a
      href="./"
      className="md:mr-6 lg:mr-12 relative inline-flex items-center z-10 cursor-pointer hover:opacity-70 transition duration-300 justify-between"
    >
      <div className="relative">
        <img
          src={change ? logo : white}
          alt="Logo"
          className="h-[50px] w-[160px]"
        />
      </div>
    </a>
  );

  const renderSignUpButton = () => (
    <div
      className={`hidden md:block text-white rounded-2xl border-2 border-white py-3 px-7 ${
        change && "bg-[#f0784e]"
      } hover:${change ? "bg-gray-800" : "bg-white"} hover:${
        !change && "text-[#f0784e]"
      } hover:shadow-lg hover:-mt-2 duration-300`}
    >
      <a href="http://login.xutul.mn" rel="noreferrer" target="_blank">
        {/* Бүртгэл үүсгэх */}
        Нэвтрэх
      </a>
    </div>
  );

  const renderSlideMenu = () => {
    return (
      <div
        className={`fixed top-0 bg-black bg-opacity-60 left-0 right-0 ${
          showSlide && "bottom-0"
        } z-50`}
      >
        <div
          className={`fixed top-0 w-[300px] z-[152] h-screen ${
            showSlide ? "left-0" : "-left-[300px]"
          } duration-300`}
        >
          {/* Logo */}
          <div
            className={`${
              change ? "bg-white" : "bg-[#f0784e]"
            } px-5 py-3 duration-300`}
          >
            {renderLogo()}
          </div>

          <div className="bg-white w-[300px] shadow-md p-5 flex flex-col flex-1 h-[90%] items-end">
            {/* Close Button  */}
            <button
              className={`bg-[#f0784e] w-10 h-10 rounded-xl border border-white text-white text-xl -mt-[40px] drop-shadow-lg ${
                showSlide ? "-mr-10" : "mr-0"
              } duration-500`}
              onClick={() => setShowSlide(!showSlide)}
            >
              x
            </button>

            <ul className="w-full mb-3 pb-3 flex-1">
              {menuData.map(({ url, label }, index) => (
                <li className="py-3 border-b" key={index}>
                  <a href={url}
                    className="relative hover:text-[#f0784e] hover:drop-shadow-md"
                    onClick={() => setShowSlide(!showSlide)}
                  >
                    {label}

                    <span
                      className={`absolute -bottom-2 left-1/2 ${
                        url === hash ? "w-1/2" : "w-0"
                      } h-1 bg-[#f0784e] rounded-r-xl transition-all duration-300`}
                    ></span>
                    <span
                      className={`absolute -bottom-2 right-1/2 ${
                        url === hash ? "w-1/2" : "w-0"
                      } h-1 bg-[#f0784e] rounded-l-2xl transition-all duration-300`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Create Register Button */}
            <div
              className={`bg-[#f0784e] hover:shadow-md mb-4 py-3 text-center text-white w-full rounded-2xl duration-300`}
            >
              <a href="http://login.xutul.mn" rel="noreferrer" target="_blank">
                Бүртгэл үүсгэх
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className={`transition-all duration-300 ${
        change && "bg-white opacity-95 shadow-lg"
      } fixed w-full z-[1000]`}
    >
      {/* Mobile */}
      <div className="lg:hidden w-full">
        <nav className="w-full z-[1000]">
          <div
            className={`flex z-[1000] h-[86px] ${
              change ? "py-12" : "py-0"
            } items-center justify-between px-8 duration-500`}
          >
            {/* Logo */}
            {renderLogo()}

            {/* Mobile Burger Menu */}
            <div
              className={`flex flex-col cursor-pointer w-[50px] item-center gap-y-2 border ${
                change ? "border-white" : "border-[#f0784e]"
              } p-2 rounded-md 
              ${
                change ? "hover:border-gray-600" : "hover:border-white"
              } duration-300 hover:shadow-lg`}
              onClick={() => setShowSlide(!showSlide)}
            >
              <span
                className={`block w-8 h-[2px] rounded ${
                  change ? "bg-gray-800" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-8 h-[2px] rounded ${
                  change ? "bg-gray-800" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-8 h-[2px] rounded ${
                  change ? "bg-gray-800" : "bg-white"
                }`}
              ></span>
            </div>

            {/* Slide Menu */}
            {renderSlideMenu()}

            {/* Create Register Button */}
            {renderSignUpButton()}
          </div>
        </nav>
      </div>

      {/* Desktop */}
      <div className="lg:block hidden w-full">
        <nav
          className={`relative ml-auto mr-auto w-full max-w-7xl px-8 overflow-visible justify-center antialiased ${
            change ? "py-2" : "py-0"
          } duration-500`}
        >
          <ul className="relative flex items-center justify-between h-[86px]">
            {/* Logo */}
            <li className="flex">{renderLogo()}</li>

            {/* Start Navbar */}
            <li
              className={`flex items-center ${
                change ? "text-gray-800" : "text-white"
              }  text-md h-full gap-x-10`}
            >
              {menuData.map(({ url, label }, index) => (
                <a
                  href={url}
                  key={index}
                  className={`h-full relative flex items-center cursor-pointer transition duration-300 ${
                    change ? "hover:text-[#f0784e]" : "hover:text-gray-800"
                  } hover:drop-shadow-md`}
                  aria-label="Toggle navigation"
                >
                  {label}

                  <span
                    className={`absolute bottom-4 left-1/2 ${
                      url.includes(hash) ? "w-1/2" : "w-0"
                    } h-1 ${
                      change ? "bg-[#f0784e]" : "bg-white"
                    } rounded-r-xl transition-all duration-500`}
                  ></span>
                  <span
                    className={`absolute bottom-4 right-1/2 ${
                      url.includes(hash) ? "w-1/2" : "w-0"
                    } h-1 ${
                      change ? "bg-[#f0784e]" : "bg-white"
                    } rounded-l-2xl transition-all duration-500`}
                  ></span>
                </a>
              ))}
            </li>

            {/* Create Register Button */}
            <li className="flex items-center">{renderSignUpButton()}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
