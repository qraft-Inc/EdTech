import React from "react";
import { LocaleModel } from "@/modules/courses/models/locales.model";
import SearchCources from "@/modules/courses/views/widgets/search-courses.widget";
import CategoryDropdown from "@/modules/courses/views/widgets/category-dropdown.widget";

const Carousel = (props: LocaleModel) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-[60vh] w-[100%]"
      style={{ backgroundImage: "url(/bg3.jpeg)" }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 text-4xl font-bold text-blue-950 ">
              {props.t("homepage:company_vision")}
            </h2>
            <h4 className="mb-6 text-xl  text-blue-950">
              {props.t("homepage:company_goal")}
            </h4>
            <div className="flex justify-between items-center w-[90%] mt-10">
              <SearchCources />
              <CategoryDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
