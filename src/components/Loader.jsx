import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  return (
    <div className="loader">
      <RingLoader color={"#001529"} size={75} />
    </div>
  );
};

export default Loader;
