import React from "react";

const OverrollStatistics = () => {
  return (
    <section className=" bg-orange-400 p-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3 lg:col-span-3 flex justify-center flex-col items-center">
          <h1 className="text-5xl font-extrabold text-white">200</h1>
          <p className=" text-white">Students</p>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-3 flex justify-center flex-col items-center">
          <h1 className="text-5xl font-extrabold text-white">250</h1>
          <p className=" text-white">Enrollments</p>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-3 flex justify-center flex-col items-center">
          <h1 className="text-5xl font-extrabold text-white">100</h1>
          <p className=" text-white">Certified Students</p>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-3 flex justify-center flex-col items-center">
          <h1 className="text-5xl font-extrabold text-white">2M+</h1>
          <p className=" text-white">Revenue</p>
        </div>
      </div>
    </section>
  );
};

export default OverrollStatistics;
