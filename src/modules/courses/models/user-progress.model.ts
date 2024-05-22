import { CourseBaseModel } from "@/modules/courses/models/course-base.model";

export interface UserProgressModal extends CourseBaseModel {
  userId: String;
  chapterId: String;
  isCompleted: boolean;
}
