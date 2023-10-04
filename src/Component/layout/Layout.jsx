
import { Outlet } from "react-router-dom";
import Navbar from "../Header Compo/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <Outlet></Outlet>
            </div>
         
        </div>
    );
};

export default Layout;