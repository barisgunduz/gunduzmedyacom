import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li><Link to={process.env.PUBLIC_URL + "/hakkimizda"}>Hakkımızda</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/hizmetler"}>Hizmetler</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/projeler"}>Projeler</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link></li>
                <li className="menu-item-has-children">
                    <Link to="#">Pages <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-office"}>Our Office</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-study"}>Case Study</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-details/whitehorse"}>Case Study Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Team</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team-details/jane-cooper"}>Team Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-clients"}>Our Clients</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/testimonials"}>Testimonial</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/pricing-table"}>Pricing Table</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/typography"}>Typography</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/404"}>404 Page</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                    </ul>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;