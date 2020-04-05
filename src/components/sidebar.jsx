import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const SidebarLink = (props) => {
    const locationPath = useLocation()
    const { to: linkTo } = props;

    let className = ""

    if (linkTo === locationPath.pathname) {
        className = 'active'
    }

    return (
        <li className={className} ><Link {...props}>{props.children}</Link></li>
    )
}

const AppSidebar = () => {
    return (
        <nav className="side-navbar">
            <div className="side-navbar-wrapper">
                <div className="sidenav-header d-flex align-items-center justify-content-center">
                    <div className="sidenav-header-inner text-center">
                        <Link href="pages-profile.html" to="#">
                            <img src="/theme/img/avatar-7.jpg" alt="person" className="img-fluid rounded-circle" />
                        </Link>
                        <h2 className="h5">Nathan Andrews</h2><span>Web Developer</span>
                    </div>
                    <div className="sidenav-header-logo">
                        <Link to="#" href="index.html" className="brand-small text-center">
                            <strong>B</strong><strong className="text-primary">D</strong>
                        </Link></div>
                </div>
                <div className="main-menu">
                    <h5 className="sidenav-heading">Main</h5>
                    <ul id="side-main-menu" className="side-menu list-unstyled">
                        <SidebarLink to="/"> <i className="icon-home"></i>Home</SidebarLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default AppSidebar