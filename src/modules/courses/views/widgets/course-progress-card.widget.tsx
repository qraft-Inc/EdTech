import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import CourseProgressCardImage from "@/modules/courses/views/widgets/course-progress-card-image.widget";

const CourseProgress = () => {
  return (
    <div className="col-span-4 first-letter:flex flex-col items-center justify-center shadow-lg rounded-sm bg-white p-2">
      <div className="flex flex-row w-full items-center justify-center my-2">
        <CourseProgressCardImage />
        <div className="flex flex-col items-start justify-center ml-2">
          <h4 className="font-semibold text-blue-950">
            There are many variations of passages of Lorem Ipsum available,
          </h4>
          <p className=" font-light text-gray-300">@nazareth_design_it</p>
        </div>
      </div>
      <LinearProgress
        variant="determinate"
        value={10}
        style={{ borderRadius: 10, height: "7px" }}
        color="primary"
      />
    </div>
  );
};

export default CourseProgress;
