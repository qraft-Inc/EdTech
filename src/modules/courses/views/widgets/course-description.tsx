import React from "react";
import { useTranslation } from "react-i18next";
import AuthorAvatar from "@/modules/courses/views/widgets/author-avatar.widget";
import CourseReviewRating from "@/modules/courses/views/widgets/course-reveiw.widget";
import ReviewCard from "@/modules/courses/views/widgets/review-card.widget";

const CourseDescription = () => {
  const { t } = useTranslation();

  const noOfReviews: number = 3;
  return (
    <div className="flex flex-col items-start justify-center w-[100%] my-2">
      <div className="flex flex-row items-center justify-center">
        <AuthorAvatar />
        <h3 className="text-md font-extralight text-blue-950 ml-2">Stuwie</h3>
      </div>
      <h2 className="mb-4 mt-4 text-lg font-medium text-blue-950">
        {t("about_course")}
      </h2>
      <p className="text-sm text-blue-950 font-thin">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <h2 className="mb-4 mt-4 text-lg font-medium text-blue-950">
        {t("reviews")}
      </h2>
      <div className="flex flex-row items-center justify-center">
        <CourseReviewRating />
        <p className=" font-thin text-blue-950 ml-2">
          {t("reviews_from", { noOfReviews })}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default CourseDescription;
