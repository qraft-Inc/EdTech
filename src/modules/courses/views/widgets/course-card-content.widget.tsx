import CourseRating from "@/common/views/forms/course-rating";
import React from "react";
import { CourseModel } from "@/modules/courses/models/course.model";

const CourseCardContent = ({
  title,
  author,
  description,
  price,
}: CourseModel) => {
  const reduceDescription =
    description && description?.length > 230
      ? description.substring(0, 230) + "..."
      : description;

  return (
    <div className="flex flex-col items-start justify-start mt-2 w-[100%]">
      <h2 className=" text-1x2 text-blue-950 font-semibold">{title}</h2>
      <CourseRating />
      <h3 className=" font-light text-gray-300">@{author}</h3>
      <div
        className="text-sm text-blue-950 font-thin"
        dangerouslySetInnerHTML={{
          __html: reduceDescription ? reduceDescription : "",
        }}
      />
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold mt-2">
          Shs{price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h2>
        <p className="font-semibold text-white bg-[#1f40af] py-1 px-4 rounded-full hover:cursor-pointer hover:bg-blue-900">
          view course
        </p>
      </div>
    </div>
  );
};

export default CourseCardContent;
