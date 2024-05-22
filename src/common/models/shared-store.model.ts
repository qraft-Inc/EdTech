import { CourseModel } from "@/modules/courses/models/course.model";
import { TrainerModel } from "@/modules/trainer/models/trainer.model";
import { CategoryModel } from "@/modules/courses/models/category.model";

export interface SharedStoreModel {
  course: CourseModel;
  courses: CourseModel[];
  trainers: TrainerModel[];
  trainer: TrainerModel;
  categories: CategoryModel[];
}
