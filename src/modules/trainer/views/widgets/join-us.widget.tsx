import React from "react";
import { LightModeSharp, MenuBook, Groups } from "@mui/icons-material";

const JoinUs = () => {
  return (
    <section className="bg-white p-16">
      <h1 className="text-3xl font-bold flex  justify-center mb-2">
        Why you should join us
      </h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-center">
          <MenuBook style={{ fontSize: 100 }} />
          <h3 className="text-2xl font-semibold my-2">Train your way</h3>
          <p className="text-md font-thin text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-center">
          <LightModeSharp style={{ fontSize: 100 }} />
          <h3 className="text-2xl font-semibold my-2">Create Impact</h3>
          <p className="text-md font-thin text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-center">
          <Groups style={{ fontSize: 100 }} />
          <h3 className="text-2xl font-semibold my-2">Build Networks</h3>
          <p className="text-md font-thin text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
