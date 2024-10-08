import { GoHome } from "react-icons/go";
import { BsCardText } from "react-icons/bs";
import { MdOutlineInsertChart } from "react-icons/md";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export const navLinks = [
  {
    label: "Dashboard",
    route: "/",
    icon: GoHome,
  },
  {
    label: "Blog",
    route: "/blog",
    icon: BsCardText,
  },
  {
    label: "Finances",
    route: "/finances",
    icon: MdOutlineInsertChart,
  },
  {
    label: "Pitches",
    route: "/pitches",
    icon: HiOutlinePresentationChartLine,
  },
  {
    label: "Settings",
    route: "/settings",
    icon: IoSettingsOutline,
  },
  {
    label: "Log Out",
    route: "/logout",
    icon: CiLogout,
  },
];
