const FormInput = ({
  containerStyle,
  inputContainerStyle,
  id,
  inputStyle,
  label,
  placeholder,
  errorMsg = "",
  type = "text",
  value = "",
  prependComponent,
  appendComponent,
  onChange,
  maxLength,
  minLength,
  min,
  readOnly,
  onKeyPress,
}) => (
  <div className={`${containerStyle}`}>
    {/* Label & Error msg */}
    <div className="flex w-[100%] justify-between">
      <label className="text-[#898B9A] text-sm">{label}</label>
      <span className="flex text-[#FF1717] text-sm justify-end">
        {errorMsg}
      </span>
    </div>

    {/* Text input */}
    <div
      className={`flex mt-2 py-0 px-6 bg-[#F5F5F8] h-[45px] rounded-xl ${inputContainerStyle}`}
    >
      {prependComponent}

      <input
        className={`flex items-center text-sm justify-center w-[100%] outline-none bg-transparent border-none ${inputStyle}`}
        type={type}
        min={min}
        readOnly={readOnly}
        placeholder={placeholder}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => (onKeyPress ? onKeyPress(e) : () => {})}
      />
      {appendComponent}
    </div>
  </div>
);

export default FormInput;
