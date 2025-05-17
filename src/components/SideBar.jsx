import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside className="w-64 h-[calc(100vh)] fixed top-0 p-6 text-white bg-red-600">
            <div className="flex items-center mb-10">
                <h1 className="text-2xl font-bold">F1 Dashboard</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="block py-2 px-3 rounded-md hover:bg-sidebar-hover hover:text-white transition-colors duration-200 text-white/80">Schedule</NavLink>
                    </li>
                    <li>
                        <NavLink to="/constructor-standing" className="block py-2 px-3 rounded-md hover:bg-sidebar-hover hover:text-white transition-colors duration-200 text-white/80">Constructor Standing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/driver-standing" className="block py-2 px-3 rounded-md hover:bg-sidebar-hover hover:text-white transition-colors duration-200 text-white/80">Driver Standing</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;
