import logo2 from "../assets/images/logo_02.png";

const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-[#081828] text-white w-full py-[140px]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:items-start md:flex-row items-center antialiased">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="mr-4 w-[180px]">
            <img src={logo2} alt="Xutul" className="w-[180px]" />
          </a>
          <p className="mt-4 text-sm">Бүртгэлээ хөтлөөд амжилтанд хүр ...</p>
          <ul className="flex justify-between mt-7">
            <li>
              <a
                href="https://www.facebook.com/xutulapplication"
                target="blank"
              >
                facebook
              </a>
            </li>
          </ul>
          <p className="mt-5 md:mt-10 text-sm">
            Хөгжүүлэгч{" "}
            <a
              href="https://bidmind.mn"
              target="blank"
              className="hover:text-[#f0784e]"
            >
              BidMind
            </a>
            . &copy; 2022 - {year.getFullYear()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          <div className="px-4 text-center">
            <h3 className="mb-9 font-normal mt-2 lg:mt-0 text-lg">Бизнес</h3>
            <ul>
              <li className="mb-3">
                <a href="#home" className="hover:text-[#f0784e] duration-300">
                  Маркетинг
                </a>
              </li>
              <li className="mb-3">
                <a href="#home" className="hover:text-[#f0784e] duration-300">
                  Танилцуулга
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 text-center">
            <h3 className="mb-9 font-normal mt-2 lg:mt-0 text-lg">Дэмжлэг</h3>
            <ul>
              <li className="mb-3">
                <a href="/guide" className="hover:text-[#f0784e] duration-300">
                  Ашиглах заавар
                </a>
              </li>
              <li className="mb-3">
                <a href="#home" className="hover:text-[#f0784e] duration-300">
                  Онлайн туслах
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 text-center">
            <h3 className="mb-9 font-normal mt-2 lg:mt-0 text-lg">Компани</h3>
            <ul>
              <li className="mb-3">
                <a
                  href="https://bidmind.mn/#about"
                  target="blank"
                  className="hover:text-[#f0784e] duration-300"
                >
                  Бидний тухай
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://bidmind.mn/#contact"
                  target="blank"
                  className="hover:text-[#f0784e] duration-300"
                >
                  Холбоо барих
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 text-center">
            <h3 className="mb-9 font-normal mt-2 lg:mt-0 text-lg">Орчин</h3>
            <ul>
              <li className="mb-3">
                <a
                  href="http://login.xutul.mn/terms"
                  target="blank"
                  className="hover:text-[#f0784e] duration-300"
                >
                  Үйлчилгээний нөхцөл
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="http://login.xutul.mn/policy"
                  target="blank"
                  className="hover:text-[#f0784e] duration-300"
                >
                  Нууцлалын бодлого
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
