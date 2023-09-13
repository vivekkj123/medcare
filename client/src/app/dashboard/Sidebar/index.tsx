"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPencil, faPlus, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@pangeacyber/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SidebarBtn from "../SidebarBtn";
import Link from "next/link";

const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-row md:flex-col items-center py-12 bg-white md:w-[25%] md:h-full rounded-2xl left-0 w-full h-20 fixed bottom-0 md:overflow-y-scroll scrollbar-hide">
      <Link href={"/dashboard"}>
        <Image
          alt="Logo"
          className="my-6 hidden md:block"
          height={70}
          width={70}
          src={"/logo.svg"}
        />
      </Link>
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
      <SidebarBtn title={"Profile"} icon={faUser} link={"/my-profile"} />
      <SidebarBtn title={"Sign Out"} icon={faSignOut} onClick={logout} />
    </div>
  );
};

export default Sidebar;
