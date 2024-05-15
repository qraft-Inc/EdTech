import React from "react";
import TrainerCourseCardImage from "@/modules/trainer/views/widgets/trainer-course-card-image.widget";
import TrainerCourseCardContent from "@/modules/trainer/views/widgets/trainer-course-card-content.widget";
import { CourseModel } from "@/modules/courses/models/course.model";

type TrainerCourseCardProps = CourseModel & { onClick: () => void };

const TrainerCourseCard = ({ title, url, onClick }: TrainerCourseCardProps) => {
  return (
    <div
      className="col-span-12 md:col-span-3 lg:col-span-3 bg-white border-1 border-gray-300 shadow-lg rounded-sm p-4 hover:cursor-pointer "
      onClick={onClick}
    >
      <TrainerCourseCardImage url={url} />
      <TrainerCourseCardContent title={title} />
    </div>
  );
};

export default TrainerCourseCard;
