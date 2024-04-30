import React from "react";
import Rating from "@mui/material/Rating";

const CourseReviewRating = () => {
  return (
    <Rating
      name="simple-controlled"
      value={1}
      onChange={(event, newValue) => {
        console.log(newValue);
      }}
    />
  );
};

export default CourseReviewRating;
