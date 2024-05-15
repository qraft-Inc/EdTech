import React from "react";
import { CourseModel } from "@/modules/courses/models/course.model";

const TrainerCourseCardImage = ({ url }: CourseModel) => {
  return (
    <div className="w-[100%] overflow-hidden">
      <img
        src={url ? url : "https://picsum.photos/200/300"}
        className="rounded-md w-[100%] resize h-48"
        // style={{ height: 200, width: "100%", resize: "inherit" }}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default TrainerCourseCardImage;
