import React from "react";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";
import { motion } from "framer-motion";
import { BaseInputTypes } from "@/common/views/forms/types/base-input";

type CoverPhotoProps = BaseInputTypes & { courseId: string | string[] };

const CourseCoverPhoto = ({
  value,
  placeholder,
  disabled,
  courseId,
  onChange,
}: CoverPhotoProps) => {
  const {
    store: { courses },
  } = useStore<SharedStore>(SharedStore);
  const course = courses.find((c) => c.id === courseId);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      className={`flex flex-col justify-center items-center bg-neutral-50 w-full  bg-cover bg-no-repeat h-[300px]`}
      style={{
        // backgroundImage: "url(/cover.png)",
        // backgroundImage: `url(${uri})`,
        backgroundImage: course?.imageUrl
          ? `url(${course?.imageUrl})`
          : "url(/cover.png)",
      }}
    >
      <h1 className="text-[#204484] text-5xl font-bold">{course?.title}</h1>
      <input
        type="text"
        className={`outline-none h-12 w-[50%] pl-2 my-4 rounded-lg text-xl `}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        disabled={disabled}
      />
    </motion.div>
  );
};

export default CourseCoverPhoto;
