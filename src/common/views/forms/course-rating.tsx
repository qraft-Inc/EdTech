import React from "react";
import Rating from "@mui/material/Rating";

const CourseRating = () => {
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={1}
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
      />
    </div>
  );
};

export default CourseRating;
