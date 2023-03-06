import "../CSS/Sidebar.css";
import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Sidebardata } from './Sidebardata'
    

function Sidebar() {
    const [sidebar, setSidebar, menu, items, toggle] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        {/* <div className="sidebar">
            <Link to="#" className="menubars">
                <FaIcons.FaBars onClick ={showSidebar} />
            </Link>
        </div> */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" /*onClick ={showSidebar} */>
                <li className="navbar-toggle">
                    <Link to="#" className="title" /* className="menubars" */>
                        {/* <AiIcons.AiOutlineClose /> */}
                        <h2>BABCOCK UNIVERSITY <p>SIWES PORTAL</p></h2>
                    </Link>
                </li>
                { Sidebardata.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )

                })}
            </ul>
        </nav>
    </>
  )
}

export default Sidebar

// const Sidebar = () => {
//     return (
//         <header>
//             <div id="burger" onClick={"enable()"}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>

//             </div>
//             <nav className={classes.nav}>
//                 <a href="./">Home</a>
//                 <a href="./">Profile</a>
//                 <a href="./newreport">New Report</a>
//                 <a href="./pastrecords">Past Records</a>
//                 <a href="./workdetails">Work Details</a>

//             </nav>
//         </header>
//     );
// }
 
// export default Sidebar;
