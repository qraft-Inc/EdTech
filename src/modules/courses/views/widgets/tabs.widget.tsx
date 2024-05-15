"use client";
import React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import { LocaleModel } from "@/common/models/locales.model";

const ContentTabs = (props: LocaleModel) => {
  const [value, setValue] = React.useState<string>("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <TabContext value={value}>
        <div className="flex items-start w-full">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={props.t("transcript")} value="1" />
            <Tab label={props.t("class_material")} value="2" />
          </TabList>
        </div>
        <TabPanel value="1">Transcript</TabPanel>
        <TabPanel value="2">Class Material</TabPanel>
      </TabContext>
    </div>
  );
};

export default ContentTabs;
