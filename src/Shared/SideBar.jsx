import { FaHome, FaUser, FaRegCalendarCheck, FaWalking, FaSlidersH } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const navLink = [
        {
            path: '/',
            logo: FaHome,
            title: 'Home'
        },
        {
            path: '/profile',
            logo: FaUser,
            title: 'Profile'
        },
        {
            path: '/schedule',
            logo: FaRegCalendarCheck,
            title: 'Schedule'
        },

        {
            path: '/activities',
            logo: FaWalking,
            title: 'Activities'
        },
        {
            path: '/settings',
            logo: FaSlidersH,
            title: 'Settings'
        }
    ]
    return (
        <div className="text-center text-white  ">
            <p className="mt-6 text-xl font-normal">logo Area</p>
            <ul>
                {
                    navLink.map(({ path, logo: Logo, title }, index) => (
                        <NavLink to={path} key={index} className={({ isActive }) =>
                            isActive ? "text-white  w-full" : "text-black"
                        }>
                            {/* <div className="block text-center mx-auto"> */}
                                <li className="flex justify-center items-center  gap-4">
                                    <p ><Logo className="text-xl" /> </p>
                                    <p className="text-lg">{title}</p>
                                </li>
                            {/* </div> */}
                        </NavLink>
                    ))
                }
            </ul>
        </div>
    );
};

export default SideBar;