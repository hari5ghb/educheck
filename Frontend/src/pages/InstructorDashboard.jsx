import React, { useState } from "react";
import InstructorHome from "../components/InstructorHome";
import ClassReportForm from "../components/Report";
import BigCalendarWithTimings from "../components/Calendar";

const InstructorDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <InstructorHome/>;
      case "Students":
        return <p>Here is the Users management section.</p>;
      case "Classes":
        return <BigCalendarWithTimings />;
      case "Reports":
        return <ClassReportForm/>;
      default:
        return <InstructorHome/>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-black">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">Instructor Panel</h1>
        </div>
        <nav className="mt-6">
          <ul>
            {["Dashboard", "Students", "Classes", "Reports"].map((menu) => (
              <li
                key={menu}
                className={`px-4 py-2 hover:bg-gray-300 cursor-pointer ${
                  activeMenu === menu ? "bg-gray-300" : ""
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold my-2 mb-4 border-b-2 border-gray-400">{activeMenu}</h2>
        <div className="text-gray-700">{renderContent()}</div>
      </main>
    </div>
  );
};

export default InstructorDashboard;
