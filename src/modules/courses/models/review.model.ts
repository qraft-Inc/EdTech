import { CourseBaseModel } from "@/modules/courses/models/course-base.model";

export interface ReviewModal extends CourseBaseModel {
  userId: String;
  comment: String;
  rating: Number;
  courseId: String;
}
