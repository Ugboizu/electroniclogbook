import "../CSS/SidebarLecturer.css";
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebardataLecturer } from './SidebardataLecturer';
import * as AiIcons from "react-icons/ai";
    

function SidebarLecturer() {
    const [sidebarLecturer, setSidebarLecturer, menu, items, toggle] = useState(false);

    // const showSidebar = () => setSidebarLecturer(!sidebarLecturer);

    const navigate = useNavigate();

    function handleLogoutClick(opt) {
        console.log("Logged out");
        localStorage.setItem('loggedIn', JSON.stringify(false)); 
        localStorage.setItem('user', JSON.stringify({})); 
        navigate("/")
    }

  return (
    <>
        <nav className={sidebarLecturer ? 'nav-menuu active' : 'nav-menuu'}>
            <ul className="nav-menu-itemss" >
                <li className="navbar-togglee">
                    <Link to="#" className="titles" >
                        <img src="../images/bablogo.png" alt="logo" />
                        <h2>BABCOCK UNIVERSITY <p>SIWES PORTAL</p></h2>
                    </Link>
                </li>
                <div className="dataa">
                    { SidebardataLecturer.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )

                    })}
                    <li className="nav-textt" onClick={handleLogoutClick}>
                                
                        <span style={{marginLeft: "0"}}>
                            <AiIcons.AiOutlineLogout />
                            <span>Logout</span>
                        </span>
                        
                    </li>
                </div>
            </ul>
        </nav>
    </>
  )
}

export default SidebarLecturer


