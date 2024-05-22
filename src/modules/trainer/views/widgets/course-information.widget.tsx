"use client";
import React from "react";
import BaseInput from "@/common/views/forms/base-input";
import BaseSelectInput from "@/common/views/forms/base-select-input";
import RichTextEditor from "@/modules/trainer/views/widgets/rich-text-editor.widget";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";
import { AddCourseStore } from "@/modules/trainer/stores/add-course.store";
import { AddCategoryStore } from "@/modules/trainer/stores/add-category.store";
import { observer } from "mobx-react";
import { useAuth } from "@clerk/nextjs";
import { AddCircleOutline } from "@mui/icons-material";
import BaseModel from "@/common/views/modals/base-modal";
import BaseButton from "@/common/views/buttons/base-button";
import CashInput from "@/common/views/forms/cash-input";

const CourseInformation = observer(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const {
    category,
    courseDescritpion,
    onCourseDescriptionChanged,
    onCategoryChanged,
    onPriceChanged,
  } = useStore<AddCourseStore>(AddCourseStore);

  const { onNameChanged, getCategories, onAddCategorySubmit, loading } =
    useStore<AddCategoryStore>(AddCategoryStore);

  const {
    store: { categories },
  } = useStore<SharedStore>(SharedStore);

  const { isSignedIn } = useAuth();

  const handleModalToggle = () => setOpen(!open);

  const handleAddCategorySubmit = () => {
    onAddCategorySubmit(isSignedIn, (res) => {
      const { success } = res;
      if (success) {
        getCategories();
      }
    });
  };

  React.useEffect(() => {
    if (isSignedIn) {
      getCategories();
    }
  }, [isSignedIn]);

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 ">
          <BaseSelectInput
            value={category}
            onChange={onCategoryChanged}
            options={categories.map((r) => r.name)}
          />
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex items-center justify-start ">
          <div
            className="flex items-center justify-center hover:cursor-pointer mb-2"
            onClick={handleModalToggle}
          >
            <AddCircleOutline className="text-2xl text-orange-400" />
            <h3 className="text-orange-400 mx-2 font-light">Add Category</h3>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 ">
          <CashInput placeholder="Course Price" onChange={onPriceChanged} />
        </div>
      </div>
      <RichTextEditor
        editorValue={courseDescritpion}
        onChange={onCourseDescriptionChanged}
      />

      <BaseModel
        title="New Category"
        open={open}
        toggleModal={handleModalToggle}
        loading={loading}
      >
        <div className="w-full">
          <BaseInput
            placeholder="Enter category name"
            onChange={onNameChanged}
          />
          <BaseButton label="Add Category" onClick={handleAddCategorySubmit} />
        </div>
      </BaseModel>
    </>
  );
});

export default CourseInformation;
