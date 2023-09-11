import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex font-bold justify-between items-center py-6 px-10">
      <div className="appContainer text-lg">
        <Image alt="Logo" height={40} width={40} src={"/logo.svg"} />
      </div>
      <div className="btnContainer">
        <a
          href="https://pdn-iwcsahggy3youj4uwjolyeh7tnwuficm.login.aws.us.pangea.cloud/authorize?state=xxxxxxxxxxxxx"
          className="px-10 py-2 bg-primary text-secondary rounded-full"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
