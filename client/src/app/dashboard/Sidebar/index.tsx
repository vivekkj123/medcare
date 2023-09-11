import Image from "next/image";
import SidebarBtn from "../SidebarBtn";
import { faPencil, faPlus, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-white w-[25%] h-full rounded-2xl">
      <Image alt="Logo" className="my-6" height={70} width={70} src={"/logo.svg"} />
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
      <SidebarBtn
        title={"Sign Out"}
        icon={faSignOut}
        link={"/sign-out"}
      />
    </div>
  );
};

export default Sidebar;
