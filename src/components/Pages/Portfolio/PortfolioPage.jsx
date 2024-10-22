import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../../sidebar/Sidebar";

const PortfolioPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    );
};

export default PortfolioPage;
