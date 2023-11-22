import React from 'react';
import { Link } from 'react-router-dom';


const Navlink = ({ icon, label ,href,isActive}) => {
    return (
        <Link to={href}>
            <div
                className={`flex gap-2 items-center hover:bg-gray-200 px-2 py-1 rounded-sm cursor-pointer ${isActive ? "bg-gray-200" : ""} `}>
                {icon}
                <span className="text-gray-500 font-semibold text-sm">{label}</span>
            </div>
        </Link>
    );
};

export default Navlink;