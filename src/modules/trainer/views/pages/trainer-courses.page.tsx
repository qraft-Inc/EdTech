import React from "react";
import { useTranslation } from "react-i18next";
import AddCoursesButton from "@/modules/trainer/views/widgets/add-courses-button.widget";
import CourseRow from "@/modules/trainer/views/widgets/courses-row.widget";
import { observer } from "mobx-react";
import { useStore } from "@/common/stores/base-store";
import { Photo } from "@mui/icons-material";
import { useAuth } from "@clerk/clerk-react";
import { AddCourseStore } from "@/modules/trainer/stores/add-course.store";
import BaseInput from "@/common/views/forms/base-input";
import BaseButton from "@/common/views/buttons/base-button";
import BaseModel from "@/common/views/modals/base-modal";
import UploadCourseContent from "@/modules/trainer/views/widgets/upload-course-content.widget";

const TrainerCourses = observer(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { isSignedIn, userId } = useAuth();

  const { t } = useTranslation();
  const {
    coverPhotoUrl,
    onAddCourseSubmit,
    onCourseChanged,
    getCourses,
    onAuthorChanged,
    loading,
  } = useStore<AddCourseStore>(AddCourseStore);

  const addCourse = () => {
    onAddCourseSubmit(userId, isSignedIn, (res) => {
      const { success } = res;
      if (success) {
        getCourses(userId, isSignedIn);
        // handleModalToggle();
      }
    });
  };
  console.log(coverPhotoUrl, "component");

  React.useEffect(() => {
    if (isSignedIn) {
      getCourses(userId, isSignedIn);
    }
  }, [isSignedIn]);

  const handleModalToggle = () => setOpen(!open);

  return (
    <div className="h-screen w-full overflow-auto">
      <AddCoursesButton t={t} onClick={handleModalToggle} />
      <CourseRow />
      <BaseModel
        title="New Course"
        open={open}
        toggleModal={handleModalToggle}
        loading={loading}
      >
        <div className="w-full">
          <BaseInput placeholder="Course Title" onChange={onCourseChanged} />
          <BaseInput placeholder="Author" onChange={onAuthorChanged} />
          <UploadCourseContent
            label="Upload Cover Photo"
            signatureEndpoint="/api/sign-upload"
            fileType="photo"
            icon={<Photo />}
          />
          <BaseButton label="Add Course" onClick={addCourse} />
        </div>
      </BaseModel>
    </div>
  );
});

export default TrainerCourses;
