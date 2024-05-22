import React from "react";
import { CourseModel } from "@/modules/courses/models/course.model";

const CourseCardImage = ({ imageUrl }: CourseModel) => {
  return (
    <div className="w-[100%] overflow-hidden">
      <img
        src={imageUrl}
        className="rounded-md w-[100%] resize h-48"
        // style={{ height: 200, width: "100%", resize: "inherit" }}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default CourseCardImage;
