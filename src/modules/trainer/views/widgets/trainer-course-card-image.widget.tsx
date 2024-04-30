import React from "react";

const TrainerCourseCardImage = () => {
  return (
    <div className="w-[100%] overflow-hidden">
      <img
        src="https://picsum.photos/200/300"
        className="rounded-md w-[100%] resize h-48"
        // style={{ height: 200, width: "100%", resize: "inherit" }}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default TrainerCourseCardImage;
