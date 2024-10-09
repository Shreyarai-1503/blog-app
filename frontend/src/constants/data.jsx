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
    route: "/signin",
    icon: CiLogout,
  },
];

import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import img5 from '../assets/img/img5.png'
import img6 from '../assets/img/img6.png'

export const blogPosts = [
  { id: 1, title: 'Company', content: 'Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas eretium tempor odio sed', date: '2 DAY AGO', image: img1 },
  { id: 2, title: 'Financial Plan', content: 'Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean', date: 'FEBRUARY 28, 2021', image: img2 },
  { id: 3, title: 'Execution', content: 'Non aliquet in pulvinar pellentesque nullam lobortis interdum faucibus senectus mauris urna molestie tristique tortor tortor nunc, in', date: 'FEBRUARY 9, 2021', image: img3 },
  { id: 4, title: 'Execution', content: 'Non aliquet in pulvinar pellentesque nullam lobortis interdum faucibus senectus mauris urna molestie tristique tortor tortor nunc, in', date: 'FEBRUARY 9, 2021', image: img4 },
  { id: 5, title: 'Execution', content: 'Non aliquet in pulvinar pellentesque nullam lobortis interdum faucibus senectus mauris urna molestie tristique tortor tortor nunc, in', date: 'FEBRUARY 9, 2021', image: img5 },
  { id: 6, title: 'Execution', content: 'Non aliquet in pulvinar pellentesque nullam lobortis interdum faucibus senectus mauris urna molestie tristique tortor tortor nunc, in', date: 'FEBRUARY 9, 2021', image: img6 },
]