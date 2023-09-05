import React from "react";

const NavBar = () => {
  return (
    <div className="flex font-bold justify-between items-center py-6 px-10">
      <div className="appContainer text-lg">
        <h2 className="text-primary">App Name</h2>
      </div>
      <div className="btnContainer">
        <a
          href=""
          className="px-10 py-2 bg-primary text-secondary rounded-full"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
