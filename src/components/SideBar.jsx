import { BarChart3, Calendar, Trophy, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import React from "react";

const SideBar = () => {
    const navItems = [
        { to: "/f1-stats-web", label: "Schedule", shortLabel: "Schedule", icon: Calendar },
        { to: "/f1-stats-web/constructor-standing", label: "Constructor Standing", shortLabel: "Constructor", icon: Trophy },
        { to: "/f1-stats-web/driver-standing", label: "Driver Standing", shortLabel: "Drivers", icon: Users },
        { to: "/f1-stats-web/analysis", label: "Analysis", shortLabel: "Analysis", icon: BarChart3 }
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 h-[calc(100vh)] fixed top-0 p-6 text-white bg-red-600">
                <div className="flex items-center mb-10">
                    <h1 className="text-2xl font-bold">F1 Dashboard</h1>
                </div>
                <nav>
                    <ul>
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={item.to}
                                        end={item.to === "/f1-stats-web"}
                                        className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-200 text-white/80"
                                    >
                                        <IconComponent size={20} />
                                        {item.label}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {/* Mobile Bottom Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-red-600 text-white z-50 border-t border-red-500 overflow-hidden w-full">
                <div className="w-full max-w-screen-sm mx-auto">
                    <ul className="flex justify-around items-center h-20 px-1">
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <li key={index} className="flex-1 min-w-0">
                                    <NavLink
                                        to={item.to}
                                        end={item.to === "/f1-stats-web"}
                                        className={({ isActive }) =>
                                            `flex flex-col items-center justify-center h-full px-1 py-2 transition-colors duration-200 rounded-lg ${isActive
                                                ? 'text-white bg-red-700'
                                                : 'text-white/80 hover:text-white hover:bg-red-700'
                                            }`
                                        }
                                    >
                                        <IconComponent size={20} className="mb-1 flex-shrink-0" />
                                        <span className="text-xs leading-tight text-center w-full truncate">{item.shortLabel}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default SideBar;
