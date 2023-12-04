const SignUp = () => {
  return (
    <section className="w-full bg-[#f0784e] py-[60px]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center antialiased">
        <div className="flex flex-col justify-center items-center mb-10">
          <h3 className="text-white text-2xl mb-5">Хэрэглэгч болох</h3>
          <p className="text-white text-center">
            {" "}
            Бүртгэлээ хөтлөөд амжилтанд хүр ...
            <br />
            Таны бизнесийн хүчирхэг туслах байх болно.
          </p>
        </div>

        <div
          className={`text-[#f0784e] rounded-2xl border-2 border-white py-3 px-7 bg-white hover:shadow-lg hover:-mt-2 hover:mb-8 duration-300 w-fit items-center mb-6`}
        >
          <a
            href="http://login.xutul.mn/register"
            target="_blank"
            rel="noreferrer"
          >
            Энд дарж бүртгэл үүсгэнэ үү
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
