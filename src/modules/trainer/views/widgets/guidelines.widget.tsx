import React from "react";

const Guidelines = () => {
  return (
    <section className="bg-white p-16">
      <h1 className="text-3xl font-bold flex  justify-center mb-2">
        How to get started
      </h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-start">
          <h2 className="text-2xl font-semibold my-2">
            Structure your caurruculum
          </h2>
          <p className="text-md font-thin ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-start">
          <h2 className="text-2xl font-semibold my-2">
            Record your course videos
          </h2>
          <p className="text-md font-thin ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-start">
          <h2 className="text-2xl font-semibold my-2">
            Upload the content and publich course
          </h2>
          <p className="text-md font-thin ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
