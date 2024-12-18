import { Outlet } from "react-router-dom";
import InstructorDashboard from "../pages/InstructorDashboard";

const InstructorLayout = () =>{
    return(
        <>
            <InstructorDashboard/>
            <Outlet/>
        </>
    );
}


export default InstructorLayout;