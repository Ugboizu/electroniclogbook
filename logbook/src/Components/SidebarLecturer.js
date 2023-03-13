import "../CSS/SidebarLecturer.css";
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebardataLecturer } from './SidebardataLecturer';
    

function SidebarLecturer() {
    const [sidebarLecturer, setSidebarLecturer, menu, items, toggle] = useState(false);

    const showSidebar = () => setSidebarLecturer(!sidebarLecturer);

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
                </div>
            </ul>
        </nav>
    </>
  )
}

export default SidebarLecturer


