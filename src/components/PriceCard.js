const PriceCard = ({
  title,
  description,
  price,
  buttonLabel,
  buttonclassName,
  containerStyle,
  textColor,
}) => (
  <div className="flex mt-8">
    <div
      className={`p-8 border-[#eee] rounded-2xl bg-white border hover:-mt-2 hover:mb-2 hover:shadow-md duration-300 w-full ${containerStyle}`}
    >
      <div className="flex flex-col items-center antialiased">
        <h3 className="text-lg mb-5 font-medium uppercase">{title}</h3>
        <p className={`text-base text-center ${textColor}`}>{description}</p>

        <div className={`py-8 flex items-end ${textColor}`}>
          {price.length > 0 ? (
            <>
              <h3 className={`text-3xl font-light text-black`}>{price}₮</h3>
              /сар
            </>
          ) : (
            <h3 className={`text-3xl font-semibold text-white`}>?</h3>
          )}
        </div>

        <a
          href="https://login.xutul.mn/login?type=level-up"
          className={buttonclassName}
          target="blank"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  </div>
);

export default PriceCard;
