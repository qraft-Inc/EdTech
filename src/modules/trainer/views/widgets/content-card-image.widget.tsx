import React from "react";

const ContentCardImage = () => {
  return (
    <div className="w-[100%] overflow-hidden">
      <img
        src="https://picsum.photos/200/300"
        className="rounded-md w-[100%] resize h-48"
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default ContentCardImage;
