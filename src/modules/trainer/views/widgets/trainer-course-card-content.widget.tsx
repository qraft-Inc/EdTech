import React from "react";

const TrainerCourseCardContent = () => {
  return (
    <div className="w-full">
      <div className="mt-2 text-sm font-thin">Next JS Complete guide</div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center p-2 rounded-2xl bg-blue-200 mr-2">
            <p className="text-sm text-blue-900 font-thin">students</p>
          </div>
          <div className="flex items-center justify-center p-2 rounded-2xl bg-green-100 ">
            <p className="text-sm text-blue-900 font-thin">in Revenue</p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrainerCourseCardContent;
