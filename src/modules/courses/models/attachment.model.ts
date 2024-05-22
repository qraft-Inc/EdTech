import { CourseBaseModel } from "@/modules/courses/models/course-base.model";

export interface AttachmentModel extends CourseBaseModel {
  name: String;
  courseId: String;
  url: String;
}
