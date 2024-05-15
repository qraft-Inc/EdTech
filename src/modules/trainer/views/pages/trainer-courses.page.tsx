import React from "react";
import { useTranslation } from "react-i18next";
import AddCoursesButton from "@/modules/trainer/views/widgets/add-courses-button.widget";
import CourseRow from "@/modules/trainer/views/widgets/courses-row.widget";
import Modal from "@mui/material/Modal";
import { observer } from "mobx-react";
import { useStore } from "@/common/stores/base-store";
import { useAuth } from "@clerk/clerk-react";
import { AddCourseStore } from "@/modules/trainer/stores/add-course.store";
import { CancelOutlined } from "@mui/icons-material";
import BaseInput from "@/common/views/forms/base-input";
import Loader from "@/common/views/widgets/loader.widget";
import BaseButton from "@/common/views/buttons/base-button";

const TrainerCourses = observer(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { isSignedIn, userId } = useAuth();

  const { t } = useTranslation();
  const { onAddCourseSubmit, onCourseChanged, getCourses, loading } =
    useStore<AddCourseStore>(AddCourseStore);

  const addCourse = () => {
    onAddCourseSubmit(userId, isSignedIn, (res) => {
      const { success } = res;
      if (success) {
        getCourses(userId, isSignedIn);
        // handleModalToggle();
      }
    });
  };

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
      <Modal
        open={open || false}
        onClose={handleModalToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="w-[40%] flex flex-col items-center justify-center p-4 bg-white rounded-sm">
          {loading ? <Loader /> : null}
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl text-blue-950 font-light">New Course</h3>
            <CancelOutlined
              className="hover:cursor-pointer"
              style={{ fontSize: 30 }}
              onClick={handleModalToggle}
            />
          </div>
          <BaseInput placeholder="Course Title" onChange={onCourseChanged} />
          <BaseButton label="Add Course" onClick={addCourse} />
        </div>
      </Modal>
    </div>
  );
});

export default TrainerCourses;
