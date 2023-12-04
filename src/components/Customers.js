import React from "react";

function Customers() {
  return (
    <section id="customers" className="w-full bg-[#f0784e] py-[140px]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center antialiased">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-gray-600 text-xl uppercase mb-1 drop-shadow-md">
            харилцагчийн тухай
          </h3>
          <h2 className="text-white text-2xl text-center lg:text-3xl lg:font-semibold">
            Одоогоор 100 гаруй хэрэглэгч xutul-ийг ашиглаж байна.
          </h2>
          <p className="text-white text-center mt-4">
            {" "}
            Одоо ашиглаж байгаа хэрэглэгчид маань сэтгэл хангалуун байна.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="mt-[50px] px-3 flex flex-col items-center">
            <h3 className="text-white text-4xl font-extrabold">100%</h3>
            <p className="text-white">Сэтгэл ханамж</p>
          </div>

          <div className="mt-[50px] px-3 flex flex-col items-center">
            <h3 className="text-white text-4xl font-extrabold">120</h3>
            <p className="text-white">Харилцагч</p>
          </div>

          <div className="mt-[50px] px-3 flex flex-col items-center">
            <h3 className="text-white text-4xl font-extrabold">125+</h3>
            <p className="text-white">Татан авалт</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
