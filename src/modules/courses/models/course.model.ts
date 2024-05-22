import { CourseBaseModel } from "@/modules/courses/models/course-base.model";

export interface CourseModel extends CourseBaseModel {
  title?: string;
  description?: string;
  imageUrl?: string;
  author?: string;
  price?: string;
}
