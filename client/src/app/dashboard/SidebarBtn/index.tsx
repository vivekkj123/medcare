import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface sideBarBtn {
  icon: IconDefinition;
  title: string;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}
const SidebarBtn = ({ icon, title, link, onClick }: sideBarBtn) => {
  return (
    <Link
      className="flex items-center px-6 py-4 gap-4 shadow-sm hover:bg-gray-100 w-[75%] my-4 rounded-xl"
      href={link ? link : ""}
      // @ts-ignore
      onClick={onClick ? () => onClick() : null}
    >
      <FontAwesomeIcon color="#188DFF" className="h-10" icon={icon} />
      {title}
    </Link>
  );
};

export default SidebarBtn;
