import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = ({ show }) => (
  <PulseLoader color={"#ffea00"} loading={show} size={15} />
);

export default Loader;
