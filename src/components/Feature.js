import React from "react";
import FeatureCard from "./FeatureCard";
import {
  ClockIcon,
  ArrowPathRoundedSquareIcon,
  ChartBarIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Feature = () => {
  return (
    <section
      id="features"
      className="py-[140px] bg-[#f9f9f9] enabled:bg-gray-600"
    >
      <div className="w-full max-w-7xl mx-auto px-8 antialiased">
        {/* section title */}
        <div className="text-center mb-7 px-[20px] md:px-[200px] xl:px-[300px]">
          <h3 className="text-md text-[#f0784e] uppercase lg:text-[15px] font-medium mb-2">
            Боломжууд
          </h3>

          <h2 className="text-xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-5">
            Утсаа ашиглан бизнесээ удирдах боломж
          </h2>
          {/* Та бүртгэл хөтлөх, өдрийн орлогын дүнг харах, бараа хайх зэргээс
            гадна өөр олон үйлдлүүд хийх боломжтой. */}
          <p className="text-sm text-gray-500 lg:text=[15px]">
            Ашиглах тусам илүү өгөөжийг бий болгоно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
          <FeatureCard
            icon={<DevicePhoneMobileIcon className="h-7 text-white w-7" />}
            title={"Нэмэлт төхөөрөмж ашиглахгүй"}
            description={
              "Байршилаас үл хамааран, хаана ч ашиглан төхөөрөмж болон нэмэлт зардалгүй хязгааргүй ашиглах боломж."
            }
          />

          <FeatureCard
            icon={<HeartIcon className="h-7 text-white w-7" />}
            title={"Хялбархан бүртгэл, удирдлага"}
            description={
              "Агуулахын бүртгэл, удирдлага болон бараа бүртгэлээ орон зай, цаг хугацаанаас үл хамааран удирдах боломж."
            }
          />

          <FeatureCard
            icon={<ChartBarIcon className="h-7 text-white w-7" />}
            title={"Орлогоо цаг алдалгүй мэдэх"}
            description={
              "Борлуулалтын орлого, барааны үлдэгдлээ цаг, минут тутамд тооцон бизнесийн үйл ажиллагаагаа өргөжүүлэн тэлэх боломж."
            }
          />

          <FeatureCard
            icon={<ArrowPathRoundedSquareIcon className="h-7 text-white w-7" />}
            title={"Хөтөл эко систем"}
            description={
              "Qpay болон түүнтэй адил бусад дижитал төлбөрийн суваг ашиглан төлбөр хүлээн авах боломж."
            }
          />

          <FeatureCard
            icon={<ClockIcon className="h-7 text-white w-7" />}
            title={"Цаг хэмнэх"}
            description={
              "Агуулах, салбар дэлгүүр болон лангууны борлууулалтын орлого, үлдэгдлийн тооцоог хугацаа алдалгүй хялбар хянах боломж."
            }
          />

          <FeatureCard
            icon={<UsersIcon className="h-7 text-white w-7" />}
            title={"Харилцагчийн бүртгэл"}
            description={
              "Байнгын харилцагчдаа борлуулалт хийсэн төлбөрийн нэхэмжлэлийг имэйл хаягаар нь илгээх боломж."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
