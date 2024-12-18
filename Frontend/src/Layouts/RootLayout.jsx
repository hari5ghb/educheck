import { Outlet } from "react-router-dom";
import Home from "../components/Body";

const RootLayout = () => {

    return (
        <>
            <Outlet />
        </>
    );
}

export default RootLayout; 