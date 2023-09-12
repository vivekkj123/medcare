"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPencil, faPlus, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@pangeacyber/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SidebarBtn from "../SidebarBtn";

const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-col items-center py-12 bg-white w-[25%] h-full rounded-2xl">
      <Image
        alt="Logo"
        className="my-6"
        height={70}
        width={70}
        src={"/logo.svg"}
      />
      <SidebarBtn
        title={"Upload New Document"}
        icon={faPlus}
        link={"/new-doc"}
      />
      <SidebarBtn
        title={"Manage Existing Documents"}
        icon={faPencil}
        link={"/new-doc"}
      />
      <SidebarBtn title={"Profile"} icon={faUser} link={"/profile"} />
      <SidebarBtn title={"Sign Out"} icon={faSignOut} onClick={logout} />
    </div>
  );
};

export default Sidebar;
