"use client";
import React from "react";
import { useStore } from "@/common/stores/base-store";
import { observer } from "mobx-react";
import { useParams } from "next/navigation";
import { AddCourseStore } from "@/modules/trainer/stores/add-course.store";
import CourseCoverPhoto from "@/modules/trainer/views/widgets/course-cover-photo.widget";
import UploadCourseTab from "@/modules/trainer/views/widgets/upload-course-tab.widget";
import PublishButton from "@/common/views/buttons/publish-button";

const UploadContent = observer(() => {
  const { courseId } = useParams();
  const { onChapterChanged, chapter } =
    useStore<AddCourseStore>(AddCourseStore);
  return (
    <div className="h-screen w-full overflow-auto">
      <CourseCoverPhoto
        courseId={courseId}
        value={chapter}
        onChange={onChapterChanged}
        placeholder="Course Chapter Title"
      />
      <div className="w-[95%] flex items-center justify-end my-4">
        <PublishButton label="Update Course" onClick={() => {}} />
      </div>
      <UploadCourseTab />
    </div>
  );
});

export default UploadContent;
