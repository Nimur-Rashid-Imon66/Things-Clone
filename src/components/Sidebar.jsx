import React from 'react';
import IconInbox from './icons/IconInbox';
import IconAnytime from './icons/IconAnytime';
import IconUpcoming from './icons/IconUpcoming';
import IconSomeday from './icons/IconSomeday';
import IconTrash from './icons/IconTrash';
import IconToday from './icons/IconToday';
import Navlink from './Navlink';
import IconAddnew from './icons/IconAddnew';
import IconLogbook from './icons/IconLogbook';
import { useLocation } from 'react-router';

const links = [
    {
        label: "Inbox",
        icon: <IconInbox height={17}/>,
        href: '/',
        className:"mb-4"
    },
    {
        label: "Today",
        icon: <IconToday height={17}/>,
        href:'/today'
    },
    {
        label: "Anytime",
        icon: <IconAnytime height={17}/>,
        href:'/anytime'
    },
    {
        label: "Upcoming",
        icon: <IconUpcoming height={17}/>,
        href:'/upcoming'
    },
    {
        label: "Someday",
        icon: <IconSomeday height={17}/>,
        href: '/someday',
        className:"mb-4"
    },
    {
        label: "Logbook",
        icon: <IconLogbook height={17}/>,
        href:'/logbook'
    },
    {
        label: "Trash",
        icon: <IconTrash height={17}/>,
        href:'/trash'
    },
]

const Sidebar = () => {
    const { pathname } = useLocation();
    return (
      <div className="w-56 bg-zinc-50 h-screen border-r flex flex-col">
        <ul className="px-5 py-5">
                {
                    links.map((link, i) => {
              return (<li key={i} className={link.className}>
                  <Navlink {...link} isActive={pathname===link.href}/> </li>);
            })
         }
            </ul>
            <div className="mt-auto">
                <button className="border-t border-gray-300 hover:bg-zinc-300 text-gray-500 font-medium py-1 px-7 gap-2 flex items-center ">
                    <IconAddnew width="20px" height="20px"/>
                    <span className="font-medium text-sm">Add Project</span>
                </button>
            </div>
      </div>
    );
};

export default Sidebar;