import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const LoginLayout = () =>{

    return(
        <>
            <LoginPage/>
            <Outlet />
        </>
    );

}

export default LoginLayout;