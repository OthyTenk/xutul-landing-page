import React from "react";
import QpayCard from "./QpayCard";
import MonpayCard from "./MonpayCard";

export const Channels = () => {
  return (
    <section id="channels" className="py-[140px] bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col antialiased justify-center items-center mb-[50px]">
          <h3 className="md:text-xl uppercase text-[#f0784e] drop-shadow-md mb-1 text-center">
            Төлбөр хүлээн авах сувгууд
          </h3>
          <h2 className="text-xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-5 text-center">
            Хэрэглэж дадсан дижитал төлбөрийн суваг
          </h2>
          <p className="text-[#888] text-sm text-center">
            Хөтөл эко системийн хүрээнд бүх төлбөрийн системтэй холбохоор
            ажиллаж байна.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <QpayCard />
          <MonpayCard />
        </div>
      </div>
    </section>
  );
};
