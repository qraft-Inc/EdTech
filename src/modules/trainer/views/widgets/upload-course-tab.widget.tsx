import React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import CourseInformation from "@/modules/trainer/views/widgets/course-information.widget";
import UploadCourseContent from "@/modules/trainer/views/widgets/upload-course-content.widget";
import { VideoCameraFront, NoteAdd } from "@mui/icons-material";

const UploadCourseTab = () => {
  const [value, setValue] = React.useState<string>("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const router = useRouter();
  // console.log(router.query.data);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <TabContext value={value}>
        <div className="flex items-start w-full">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Course Information"
              value="1"
              sx={{
                "&.Mui-selected": {
                  color: "#fb933b",
                },
                "&:hover": {
                  color: "#fb933b",
                },
                color: "black",
              }}
            />
            <Tab
              label="Chapter Content"
              value="2"
              sx={{
                "&.Mui-selected": {
                  color: "#fb933b",
                },
                "&:hover": {
                  color: "#fb933b",
                },
                color: "black",
              }}
            />
            <Tab
              label="Attachments"
              value="3"
              sx={{
                "&.Mui-selected": {
                  color: "#fb933b",
                },
                "&:hover": {
                  color: "#fb933b",
                },
                color: "black",
              }}
            />
          </TabList>
        </div>
        <TabPanel value="1" className=" w-full">
          <CourseInformation />
        </TabPanel>
        <TabPanel value="2" className=" w-full">
          <UploadCourseContent
            label="Upload Course Video"
            signatureEndpoint="/api/sign-upload"
            fileType="video"
            icon={<VideoCameraFront />}
          />
        </TabPanel>
        <TabPanel value="3" className=" w-full">
          <UploadCourseContent
            label="Upload Course Attachment"
            signatureEndpoint="/api/sign-upload"
            fileType="document"
            icon={<NoteAdd />}
          />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default UploadCourseTab;
