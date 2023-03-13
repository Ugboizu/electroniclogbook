import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebardataLecturer = [
    
    {
        title: 'Profile',
        path: '/profileLecturer',
        icon: <IoIcons.IoIosPersonAdd />,
        cName: 'nav-textt'
    },
    {
        title: 'Students Supervised',
        path: '/student',
        icon: <FaIcons.FaChalkboardTeacher />,
        cName: 'nav-textt'
    },
    // {
    //     title: 'Past Records',
    //     path: '/pastrecords',
    //     icon: <AiIcons.AiFillFolder />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Work Details',
    //     path: '/workdetails',
    //     icon: <FaIcons.FaBuilding />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Logout',
        path: '',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-textt'
    },
]