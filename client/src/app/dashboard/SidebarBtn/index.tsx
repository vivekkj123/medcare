import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SidebarBtn = ({ icon, title, link }) => {
  return (
    <Link className="flex items-center px-6 py-4 gap-4 shadow-sm hover:bg-gray-100 w-[75%] my-4 rounded-xl" href={link}>
      <FontAwesomeIcon color="#188DFF" className="h-10" icon={icon} />
      {title}
    </Link>
  );
};

export default SidebarBtn;
