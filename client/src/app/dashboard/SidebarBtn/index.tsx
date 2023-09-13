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
      className="flex items-center px-6 py-4 gap-1 md:gap-4 shadow-sm hover:bg-gray-100 md:w-[75%] w-full my-4 rounded-xl flex-col md:flex-row"
      href={link ? link : ""}
      // @ts-ignore
      onClick={onClick ? () => onClick() : null}
    >
      <FontAwesomeIcon color="#188DFF" className="h-4 md:h-10" icon={icon} />
      <p className="text-center md:text-left text-xs md:text-lg">{title}</p>
    </Link>
  );
};

export default SidebarBtn;
