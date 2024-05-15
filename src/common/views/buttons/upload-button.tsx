import React from "react";
import Button from "@mui/material/Button";
import { FileUploadTypes } from "@/common/views/buttons/types/file-upload";

const UploadButton = ({ label, icon, onClick }: FileUploadTypes) => {
  return (
    <>
      <Button
        variant="contained"
        component="span"
        onClick={onClick}
        startIcon={icon}
        sx={{
          backgroundColor: "#fb933b",
          "&:hover": {
            backgroundColor: "#f7770e",
          },
        }}
      >
        {label}
      </Button>
    </>
  );
};

export default UploadButton;
