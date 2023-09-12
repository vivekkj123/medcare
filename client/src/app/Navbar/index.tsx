import { useAuth } from "@pangeacyber/react-auth";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  const { authenticated, login, logout } = useAuth();

  return (
    <div className="flex font-bold justify-between items-center py-6 px-10">
      <div className="appContainer text-lg">
        <Image alt="Logo" height={40} width={40} src={"/logo.svg"} />
      </div>
      <div className="btnContainer">
        <a
          className="px-10 cursor-pointer py-2 bg-primary text-secondary rounded-full"
          onClick={() => (authenticated ? logout() : login())}
        >
          {authenticated ? "Sign Out" : "Sign in"}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
