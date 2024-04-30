import React from "react";
import Avatar from "@/common/views/widgets/avatar.widget";
import CourseRating from "@/common/views/forms/course-rating";

const ReviewCard = () => {
  return (
    <div className="flex flex-col items-start justify-center p-2 shadow-lg bg-white rounded-md">
      <div className="flex flex-row items-center justify-center">
        <Avatar />
        <h3 className="text-md font-extralight text-blue-950 ml-2">Stuwie</h3>
      </div>
      <p className="text-xs text-blue-950 font-thin">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',
      </p>
      <div className="flex items-end">
        <CourseRating />
      </div>
    </div>
  );
};

export default ReviewCard;
