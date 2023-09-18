import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebardata = [
    
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoIosPersonAdd />,
        cName: 'nav-text'
    },
    {
        title: 'New Report',
        path: '/newreport',
        icon: <AiIcons.AiFillFileAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Past Records',
        path: '/pastrecords',
        icon: <AiIcons.AiFillFolder />,
        cName: 'nav-text'
    },
    {
        title: 'Work Details',
        path: '/workdetails',
        icon: <FaIcons.FaBuilding />,
        cName: 'nav-text'
    },
]