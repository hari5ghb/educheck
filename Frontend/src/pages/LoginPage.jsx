import { useNavigate } from "react-router-dom";
import LoginUser from "../components/LoginUser";
import admin from'../assets/admin.jpg';
import instructor from'../assets/instructor.jpg';

const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="mt-20 container w-auto my-5 mx-auto">
                    <LoginUser/>
            </div>
        </>
    );

}

export default LoginPage;