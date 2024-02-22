import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai"
import { FaHistory } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"
import { BsChatFill } from "react-icons/bs"
import { IoMdHelp } from "react-icons/io"
import logo from './neu.png';
import "./index.css";

function KanbasNavigation() {
    const links = [
        "Account",
        "Dashboard",
        "Courses",
        "Calendar",
        "Inbox",
        "History",
        "Studio",
        "Help",
    ];

    const linkIcon = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <AiOutlineInbox className="wd-icon" />,
        History: <FaHistory className="wd-icon" />,
        Studio: <RiComputerLine className="wd-icon" />,
        Commons: <BsChatFill className="wd-icon" />,
        Help: <IoMdHelp className="wd-icon" />,
      };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation">
            <div classNmae="list-group-item logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {linkIcon[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;