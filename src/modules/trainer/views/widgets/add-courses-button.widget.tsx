import React from "react";
import BaseButton from "@/common/views/buttons/base-button";

const AddCoursesButton = () => {
  return (
    <div className=" items-center justify-between m-4 lg:flex md:flex">
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold text-blue-950">Your Courses</h1>
      </div>
      <div className="col-span-1">
        <BaseButton />
      </div>
    </div>
  );
};

export default AddCoursesButton;
