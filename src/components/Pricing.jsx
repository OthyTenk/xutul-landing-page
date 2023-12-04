import { OutstandPriceCard } from "./OutstandPriceCard";
import PriceCard from "./PriceCard";
import RecommendedPriceCard from "./RecommendedPriceCard";

const Pricing = () => (
  <section id="pricing" className="bg-[#f9f9f9] w-full py-[140px]">
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-col antialiased justify-center items-center mb-[50px]">
        <h3 className="text-xl uppercase text-[#f0784e] drop-shadow-md mb-1">
          Үнийн санал
        </h3>
        <h2 className="text-xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-5">
          Хэрэглээнд тохирсон үнийн санал
        </h2>
        <p className="text-[#888] text-sm text-center">
          Бид үнийг аль болох уян хатан байлгахад анхаарч байх болно.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <RecommendedPriceCard
          title="- Start -"
          description={
            "Шинээр эхлэж буй болон хөлөө олохоор тэмүүлж буй бизнес эрхлэгч танд зориулсан сонгой багц."
          }
          price="1,000"
          buttonLabel={"ТАНД САНАЛ БОЛГОЖ БУЙ"}
          containerStyle=""
          buttonclassName=""
        />

        <PriceCard
          title="- Level Up -"
          description={
            "Салбарт хөлөө олж эхлэн цаашид өргөжин тэлэхээр зорьж буй 2 ба түүнээс олон салбартай бизнес эрхлэгч танд."
          }
          textColor="text-[#888] antialiased"
          price="5,000"
          buttonLabel={"Сонгох"}
          buttonclassName="bg-[#f0784e] uppercase text-sm text-white py-3 px-6 rounded-xl w-full text-center"
        />

        {/* Outstand */}
        <OutstandPriceCard
          title="- Corporate -"
          description={
            "Байгууллагын онцлог, үйл ажиллагаандаа тохируулан өөрчлөх, бусад системтэй нэгтгэх хүсэлтэй бизнесийн байгууллагад."
          }
          buttonLabel={"Холбоо барих"}
          buttonclassName=""
        />
      </div>
    </div>
  </section>
);

export default Pricing;
