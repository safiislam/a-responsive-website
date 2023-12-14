import { Outlet } from "react-router-dom";
import SideBar from "../../Shared/SideBar";


const HomePage = () => {
    return (
        <div className="grid grid-cols-5" >
            <div className="col-span-1 border h-screen bg-[#493971] rounded rounded-l-2xl">
                <SideBar></SideBar>
            </div>
            <div className="col-span-3 border"> 
                <Outlet />
            </div>
            <div className="col-span-1 border">

            </div>
        </div>
    );
};

export default HomePage;