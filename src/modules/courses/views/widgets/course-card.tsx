import React from "react";
import CourseCardImage from "@/modules/courses/views/widgets/course-card-image.widget";
import CourseCardContent from "@/modules/courses/views/widgets/course-card-content.widget";
import { CourseModel } from "@/modules/courses/models/course.model";
import { motion } from "framer-motion";

const CourseCard = ({
  title,
  imageUrl,
  author,
  description,
  price,
}: CourseModel) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      // drag="x"
      // dragConstraints={{ left: -100, right: 100 }}
      className="flex flex-col justify-start items-center col-span-12 md:col-span-4 lg:col-span-3 rounded-sm shadow-lg h-96 bg-white p-3"
    >
      <CourseCardImage imageUrl={imageUrl} />
      <CourseCardContent
        title={title}
        author={author}
        description={description}
        price={price}
      />
    </motion.div>
  );
};

export default CourseCard;
