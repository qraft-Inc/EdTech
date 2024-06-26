import React from "react";

const AuthorAvatar = () => {
  return (
    <a
      className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
      href="#"
      id="dropdownMenuButton2"
      role="button"
      data-twe-dropdown-toggle-ref
      aria-expanded="false"
    >
      {/* <!-- User avatar --> */}
      <img
        src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
        className="rounded-full"
        style={{ height: 40, width: 40 }}
        alt=""
        loading="lazy"
      />
    </a>
  );
};

export default AuthorAvatar;
