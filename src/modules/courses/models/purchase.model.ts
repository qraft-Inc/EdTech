import { CourseBaseModel } from "@/modules/courses/models/course-base.model";

export interface PurchaseModal extends CourseBaseModel {
  userId: String;
  courseId: String;
}
