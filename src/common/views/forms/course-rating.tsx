import React from "react";
import Rating from "@mui/material/Rating";

const CourseRating = () => {
  return (
    <div>
      <Rating
        name="size-small"
        size="small"
        value={1}
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
      />
    </div>
  );
};

export default CourseRating;
