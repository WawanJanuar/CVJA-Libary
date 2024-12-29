import React from "react";
import { Link } from "react-router-dom";
import navCss from "./nav.module.css"; // Import CSS Module

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <ul className={navCss.ul}>
                <li className={navCss.li}>
                    <Link to="/" className={navCss.Logo}>CVJA Library</Link>
                </li>
                <li className={navCss.li}><Link to="/" className={navCss.Link}>Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
