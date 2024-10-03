import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row ">
                        <div className="col-6 ">
                            <div className="header_top_left">
                                <span>Need Help?</span>
                                <span className="header_top_help">
                                    <i class="ri-phone-fill"></i>+1-202-555-0149
                                </span>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="header_top_right">
                                <Link to="#"><i class="ri-login-circle-line"></i>Login</Link>
                                <Link to="/adminlogin"><i class="ri-user-line"></i>Admin</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Header middle */}
            <div className="header_middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-3 col-xs-6 ">
                            <div className="logo">
                                <h1><Link to="/home">
                                    <i class="ri-car-line"></i>
                                    <span>Rent Car <br />Service</span>
                                </Link>
                                </h1>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i class="ri-earth-line"></i></span>
                                <div className="header_location-content">
                                    <h4>India</h4>
                                    <h6>Delhi, India</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3  col-xs-6">
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i class="ri-time-line"></i></span>
                                <div className="header_location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6 d-flex align-items-center justify-content-end request-btn ">
                            <button className="header_btn btn">
                                <Link to="/contact">
                                    <i class="ri-phone-line"></i>
                                    Request a call
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* main nav */}
            <nav className="container-fluid main-navbar ">
                <div className="container">
                    <div className="navbar navbar-expand-md ">

                        <button className="navbar-toggler toggler-nav bg-secondary" data-bs-target="#mainNav" data-bs-toggle="collapse" >
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div id="mainNav" className="collapse navbar-collapse  ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cars" className="nav-link">Car</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blogs" className="nav-link">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex justify-content-end search-box">
                            <input type="text" placeholder="Search" />
                            <i class="ri-search-line"></i>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;