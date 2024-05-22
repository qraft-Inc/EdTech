import { CourseModel } from "@/modules/courses/models/course.model";

export interface CategoryModel {
  id: string;
  name: string;
  courses: CourseModel[];
}
