import React from "react";
import BaseInput from "@/common/views/forms/base-input";
import BaseSelectInput from "@/common/views/forms/base-select-input";
import RichTextEditor from "@/modules/trainer/views/widgets/rich-text-editor.widget";
import { useStore } from "@/common/stores/base-store";
import { AddCourseStore } from "@/modules/trainer/stores/add-course.store";
import { observer } from "mobx-react";

const CourseInformation = observer(() => {
  const {
    category,
    author,
    descritpion,
    onDescriptionChanged,
    onCategoryChanged,
    onAuthorChanged,
  } = useStore<AddCourseStore>(AddCourseStore);
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-6p-4 ">
          <BaseInput
            placeholder="Author"
            onChange={onAuthorChanged}
            value={author}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6p-4 flex items-center justify-center ">
          <BaseSelectInput
            value={category}
            onChange={onCategoryChanged}
            options={[
              "Marketing & Sales",
              "UI/UX Designs",
              "Programming",
              "Business Administration",
            ]}
          />
        </div>
      </div>
      <RichTextEditor
        editorValue={descritpion}
        onChange={onDescriptionChanged}
      />
    </>
  );
});

export default CourseInformation;
