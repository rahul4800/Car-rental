import { Link } from "react-router-dom";
import "../styles/footer.css";


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="footer_logo">
                            <h1><Link to="/home">
                                <i class="ri-car-line"></i>
                                <span>Rent Car <br />Service</span>
                            </Link>
                            </h1>
                        </div>
                        <p className="footer_logo-content">
                        Experience the self-drive vehicle rental service from hourly to 
                        yearly basis that too anytime around the city #HIRE. TRAVEL. 
                         ENJOY Rent like it's your own!
                        </p>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h5 className="footer_link-title">
                            Quick Links
                        </h5>
                        <ul>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Car Listing</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h5 className="footer_link-title">
                            Head Office
                        </h5>
                        <p className="office_info">123 Delhi, India</p>
                        <p className="office_info">Phone: +1-202-555-0149</p>
                        <p className="office_info">Email: car_rent@gmail.com</p>
                        <p className="office_info">Office Time: 10am - 7pm</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="mb-4">
                            <h5 className="footer_link-title">Newsletter</h5>
                            <p className="section_description">Subscribe our newsletter</p>
                            <div className="newsletter">
                                <input type="email" placeholder="Email" />
                                <span>
                                    <i class="ri-send-plane-line"></i>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-12">
                        <div className="footer_bottom">
                            <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                                <i class=".text-danger"></i>@ Copyright {year}, All rights reserved.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </footer >
    );
}

export default Footer;