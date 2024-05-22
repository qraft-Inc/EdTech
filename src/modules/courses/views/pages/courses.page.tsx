import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@clerk/nextjs";
import { SharedStore } from "@/common/stores/shared-store";
import { useStore } from "@/common/stores/base-store";
import { CoursesStore } from "@/modules/courses/stores/courses.store";
import { AddCategoryStore } from "@/modules/trainer/stores/add-category.store";
import { CreateTrainerStore } from "@/modules/trainer/stores/create-trainer.store";
import Carousel from "@/modules/courses/views/widgets/carousel.widget";
import SectionHeader from "@/common/views/widgets/section-header";
import CourseCard from "@/modules/courses/views/widgets/course-card";

const Courses = () => {
  const { t } = useTranslation();
  const { isSignedIn, userId } = useAuth();
  const {
    store: { categories, courses },
  } = useStore<SharedStore>(SharedStore);
  const { getCategories } = useStore<AddCategoryStore>(AddCategoryStore);
  const { getAllCourses, loading } = useStore<CoursesStore>(CoursesStore);
  const { getTrainer } = useStore<CreateTrainerStore>(CreateTrainerStore);

  React.useEffect(() => {
    getAllCourses();
    getCategories();
    getTrainer(userId);
  }, [userId, isSignedIn]);

  React.useEffect(() => {
    if (isSignedIn) {
      getTrainer(userId);
    }
  }, [userId, isSignedIn]);

  // console.log(courses);

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel t={t} categories={categories} />
      <SectionHeader header="All Courses" />
      <div className="grid grid-cols-12 gap-4 m-4">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            title={c.title}
            imageUrl={c.imageUrl}
            author={c.author}
            description={c.description}
            price={c.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
