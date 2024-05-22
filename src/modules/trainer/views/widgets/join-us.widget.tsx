import React from "react";
import { LightModeSharp, MenuBook, Groups } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion";

const JoinUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5], [2]);

  return (
    <section className="bg-white p-16">
      <h1 className="text-3xl font-bold flex  justify-center mb-2">
        Why you should join us
      </h1>
      <motion.div
        whileHover={{
          scale: 1,
        }}
        animate={{
          x: 0,
          y: 0,
          scale: 0.9,
          rotate: 0,
        }}
        className="grid grid-cols-12 gap-4"
      >
        <motion.div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-center">
          <MenuBook style={{ fontSize: 100 }} />
          <h3 className="text-2xl font-semibold my-2">Train your way</h3>
          <p className="text-md font-thin text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </motion.div>
        <motion.div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-center">
          <LightModeSharp style={{ fontSize: 100 }} />
          <h3 className="text-2xl font-semibold my-2">Create Impact</h3>
          <p className="text-md font-thin text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </motion.div>
        <motion.div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center flex-col items-center">
          <Groups style={{ fontSize: 100 }} />
          <h3 className="text-2xl font-semibold my-2">Build Networks</h3>
          <p className="text-md font-thin text-center">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinUs;
