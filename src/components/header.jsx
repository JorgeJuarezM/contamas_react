import React from 'react';
import Link from './link'
import { useAuth } from 'reactfire';


const AppHeader = () => {
    const auth = useAuth()
    const handleClick = (evt) => {
        evt.preventDefault()
        auth.signOut()
        // window.location.reload(true);
    }

    const handleToggle = (e) => {
        e.preventDefault();
        if (window.jQuery(window).outerWidth() > 1194) {
            window.jQuery('nav.side-navbar').toggleClass('shrink');
            window.jQuery('.page').toggleClass('active');
        } else {
            window.jQuery('nav.side-navbar').toggleClass('show-sm');
            window.jQuery('.page').toggleClass('active-sm');
        }
    }
    return (
        <header className="header">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-holder d-flex align-items-center justify-content-between">
                        <div className="navbar-header">
                            <Link id="toggle-btn" href="#" onClick={handleToggle} className="menu-btn"><i className="icon-bars"> </i>
                            </Link>
                            <Link href="index.html" className="navbar-brand">
                                {/* <div className="brand-text d-none d-md-inline-block"><span>Bootstrap </span><strong className="text-primary">Dashboard</strong></div> */}
                                <img src="/logo_full.png" className="brand-text d-none d-md-inline-block" style={{
                                    height: "50px"
                                }} alt="avatar"></img>
                            </Link></div>
                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                            <li className="nav-item dropdown">
                                <Link id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell"></i><span className="badge badge-warning">12</span>
                                </Link>
                                <ul aria-labelledby="notifications" className="dropdown-menu">
                                    <li><Link rel="nofollow" href="#" className="dropdown-item">
                                        <div className="notification d-flex justify-content-between">
                                            <div className="notification-content"><i className="fa fa-envelope"></i>You have 6 new messages </div>
                                            <div className="notification-time"><small>4 minutes ago</small></div>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item">
                                        <div className="notification d-flex justify-content-between">
                                            <div className="notification-content"><i className="fa fa-twitter"></i>You have 2 followers</div>
                                            <div className="notification-time"><small>4 minutes ago</small></div>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item">
                                        <div className="notification d-flex justify-content-between">
                                            <div className="notification-content"><i className="fa fa-upload"></i>Server Rebooted</div>
                                            <div className="notification-time"><small>4 minutes ago</small></div>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item">
                                        <div className="notification d-flex justify-content-between">
                                            <div className="notification-content"><i className="fa fa-twitter"></i>You have 2 followers</div>
                                            <div className="notification-time"><small>10 minutes ago</small></div>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-bell"></i>view all notifications                                            </strong></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"> <Link id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-envelope"></i><span className="badge badge-info">10</span></Link>
                                <ul aria-labelledby="notifications" className="dropdown-menu">
                                    <li><Link rel="nofollow" href="#" className="dropdown-item d-flex">
                                        <div className="msg-profile"> <img src="/theme/img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                                        <div className="msg-body">
                                            <h3 className="h5">Jason Doe</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item d-flex">
                                        <div className="msg-profile"> <img src="/theme/img/avatar-2.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                                        <div className="msg-body">
                                            <h3 className="h5">Frank Williams</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item d-flex">
                                        <div className="msg-profile"> <img src="/theme/img/avatar-3.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                                        <div className="msg-body">
                                            <h3 className="h5">Ashley Wood</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                                        </div></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-envelope"></i>Read all messages    </strong></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle">
                                <img src="/theme/img/flags/16/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></Link>
                                <ul aria-labelledby="languages" className="dropdown-menu">
                                    <li><Link rel="nofollow" href="#" className="dropdown-item"> <img src="/theme/img/flags/16/DE.png" alt="English" className="mr-2" /><span>German</span></Link></li>
                                    <li><Link rel="nofollow" href="#" className="dropdown-item"> <img src="/theme/img/flags/16/FR.png" alt="English" className="mr-2" /><span>French                                                         </span></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="nav-link logout" onClick={handleClick}>
                                    <span className="d-none d-sm-inline-block">Logout</span>
                                    <i className="fa fa-sign-out"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default AppHeader