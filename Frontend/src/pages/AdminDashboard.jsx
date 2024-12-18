import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const navigate = useNavigate();

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        { menu == "Dashboard" ? navigate(`/admindash/`) : navigate(`/admindash/${menu.toLowerCase()}`) }
    };

    return (
        <>
            <header className="w-full bg-black text-lg shadow-md p-5  mb-10">
                <div className="flex items-center justify-between px-6 py-4">
                    <h1 className="text-3xl text-indigo-500 font-bold">Admin Panel</h1>
                    <nav>
                        <ul className="flex space-x-6 text-white">
                            {["Dashboard", "Students", "Instructor", "Classes"].map((menu) => (
                                    <li
                                        key={menu}
                                        className={`cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 `} 
                                        onClick={() => handleMenuClick(menu)}
                                    >
                                        <button>{menu}</button>
                                    </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default AdminDashboard;
