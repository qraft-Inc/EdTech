import React from "react";
import { Circles } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex items-center justify-center absolute top-0 bottom-0 w-full bg-black bg-opacity-25 h-screen z-50">
      <Circles
        height="80"
        width="80"
        color="#fb933b"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
