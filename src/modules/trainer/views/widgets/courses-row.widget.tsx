import React from "react";
import TrainerCourseCard from "@/modules/trainer/views/widgets/trainer-course-card.widget";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";
import { useRouter } from "next/navigation";

const CourseRow = () => {
  const router = useRouter();
  const {
    store: { courses },
  } = useStore<SharedStore>(SharedStore);

  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      {courses.map((c) => (
        <TrainerCourseCard
          key={c.id}
          title={c.title}
          imageUrl={c.imageUrl}
          onClick={() => router.push(`/upload-course/${c.id}`)}
        />
      ))}
    </div>
  );
};

export default CourseRow;
