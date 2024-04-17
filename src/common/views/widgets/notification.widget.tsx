import React from "react";

const Notification = () => {
  return (
    <a
      className="me-4 flex items-center text-neutral-600 dark:text-white"
      href="#"
      id="dropdownMenuButton1"
      role="button"
      data-twe-dropdown-toggle-ref
      aria-expanded="false"
    >
      {/* <!-- Dropdown trigger icon --> */}
      <span className="[&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      {/* <!-- Notification counter --> */}
      <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
        1
      </span>
    </a>
  );
};

export default Notification;
