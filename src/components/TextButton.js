const TextButton = ({
  label,
  labelStyle,
  disabled = false,
  label2,
  label2Style,
  buttonContainerStyle,
  onClick,
}) => (
  <button
    className={`border-none flex items-center cursor-pointer ${
      disabled && "cursor-not-allowed"
    } justify-center ${buttonContainerStyle}`}
    disabled={disabled}
    onClick={onClick}
  >
    <span className={`text-white ${labelStyle}`}>{label}</span>
    {label2 !== "" && (
      <span className={`flex text-right ${label2Style}`}>{label2}</span>
    )}
  </button>
);

export default TextButton;
