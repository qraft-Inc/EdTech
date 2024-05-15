import React from "react";
import { useStore } from "@/common/stores/base-store";
import { observer } from "mobx-react";
import { AddCourseStore } from "@/modules/trainer/stores/add-course.store";
import { CldUploadWidget } from "next-cloudinary";
import UploadButton from "@/common/views/buttons/upload-button";
import { UploadCourseContentModel } from "@/modules/trainer/models/upload-course-content.model";

const UploadCourseContent = observer(
  ({ signatureEndpoint, label, fileType, icon }: UploadCourseContentModel) => {
    const { onSelectSuccess, onUploadFaliure, onUploadSwitch } =
      useStore<AddCourseStore>(AddCourseStore);
    return (
      <div className="flex items-center justify-center w-full">
        <CldUploadWidget
          signatureEndpoint={signatureEndpoint}
          onSuccess={onSelectSuccess}
          options={{ sources: ["local", "url"] }}
          onError={onUploadFaliure}
          onUploadAdded={onUploadSwitch(fileType)}
        >
          {({ open }) => {
            return (
              <>
                {fileType === "video" || fileType === "document" ? (
                  <div
                    className="w-[90%] flex flex-col items-center justify-center p-32 border-2 border-dashed rounded-sm bg-neutral-100 cursor-pointer"
                    onClick={() => open()}
                  >
                    <UploadButton
                      label={label}
                      icon={icon}
                      onClick={() => open()}
                    />
                  </div>
                ) : (
                  <UploadButton
                    label={label}
                    icon={icon}
                    onClick={() => open()}
                  />
                )}
              </>
            );
          }}
        </CldUploadWidget>
      </div>
    );
  }
);

export default UploadCourseContent;
