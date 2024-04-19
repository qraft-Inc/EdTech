import CourseRating from "@/common/views/forms/course-rating";
import React from "react";

const CourseCardContent = () => {
  return (
    <div className="flex flex-col items-start justify-start mt-2 w-[100%]">
      <h2 className=" text-1x2 text-blue-950 font-semibold">
        Postutr Perfection
      </h2>
      <CourseRating />
      <h3 className=" font-light text-gray-300">@nazareth_design_it</h3>
      <p className="text-sm text-blue-950 font-thin">
        In post mean shot ye. There out her child sir his lived. Design at
        uneasy me season of branch on praise esteem.
      </p>
    </div>
  );
};

export default CourseCardContent;
