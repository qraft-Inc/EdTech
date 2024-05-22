import { CourseBaseModel } from "@/modules/courses/models/course-base.model";

export interface ChapterModel extends CourseBaseModel {
  title: String;
  descritpion: String;
  position: Number;
  isPublished: boolean;
  courseId: String;
  videoUrl: String;
}
