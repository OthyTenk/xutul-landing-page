import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);

  //Handler
  const canSend = () =>
    name.length > 2 &&
    email.length > 6 &&
    text.length > 10 &&
    phone.length === 8;

  const onSend = () => {
    emailjs
      .send(
        "service_lnx1t8u",
        "template_n8v4e7q",
        {
          from_name: name,
          from_phone: phone,
          from_email: email,
          message: text,
        },
        "BDAtStvIsgQJ7Qdjb"
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setPhone("");
          setText("");
          setStatus(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(false);
      }, 3000);
    }
  }, [status]);

  return (
    <section id="contact" className="relative  pb-[120px] w-full">
      <div className="bg-[#f0784e] pt-[100px] lg:pt-[100px]"> </div>
      <div className="bg-white mx-auto max-w-2xl pt-[20px] px-4 lg:px-[120px] antialiased">
        <div className="pt-10 pb-6 flex flex-col items-center">
          <h3 className="text-2xl text-center uppercase">
            хамтран ажиллах тухай санал
          </h3>
          <span className="mt-2 rounded-md bg-[#f0784e] h-1 w-[180px]"></span>
        </div>

        {status && (
          <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
            <p>Таны санлыг амжилттай илгээлээ</p>
          </div>
        )}
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Имэйл
          </span>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#f0784e] focus:ring-[#f0784e] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="taniihayag@domain.mn"
          />
        </label>

        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Утасны дугаар
          </span>
          <input
            type="tel"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            maxLength={8}
            value={phone}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#f0784e] focus:ring-[#f0784e] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="12345678"
          />
        </label>

        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Нэр
          </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#f0784e] focus:ring-[#f0784e] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Дорж"
          />
        </label>

        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Санлын агуулга
          </span>
          <textarea
            name="content"
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#f0784e] focus:ring-[#f0784e] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Энд санлаа бичнэ үү!"
          ></textarea>
        </label>

        <button
          disabled={!canSend()}
          className={`${
            canSend()
              ? "bg-[#f0784e] cursor-pointer"
              : "bg-gray-500 cursor-not-allowed"
          } mt-10 border text-sm font-medium text-[#f0e3eb] py-3 px-6 rounded-xl w-full text-center uppercase`}
          onClick={() => onSend()}
        >
          Илгээх
        </button>
      </div>
    </section>
  );
}

export default Contact;
