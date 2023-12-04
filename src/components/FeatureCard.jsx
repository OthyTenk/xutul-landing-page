const FeatureCard = ({ title, icon, description }) => (
  <div className="flex mt-8">
    <div className="p-8 border-[#eee] rounded-2xl bg-white border hover:-mt-2 hover:mb-2 hover:shadow-md duration-300">
      <div className="bg-[#f0784e] w-16 h-16 flex items-center justify-center rounded-xl p-2 mb-7 shadow-lg shadow-gray-300">
        {icon}
      </div>

      <h3 className="text-lg mb-5 font-medium">{title}</h3>
      <p className="text-[15px] text-gray-500">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
