import driveImg from "../assets/all-images/drive.jpg";
import BecomeDriverSection from "../components/BecomDriverSection";
import AboutSection from "../components/UI/AboutSection";
import CommonSection from "../components/UI/CommonSection";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
    return (
        <>
            <CommonSection title="About Us" />
            <AboutSection />
            <section className="about_page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="about_page-img">
                                <img src={driveImg} alt="" className="w-100 rounded-3" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about_page-content">
                                <h2 className="section_title">
                                    We Are Committed To Provide Safe Ride Solutions
                                </h2>

                                <p className="section_description">
                                    We prioritize your safety and comfort above all else. Our mission is to provide reliable and secure transportation solutions that cater to your every need, 
                                    ensuring a seamless journey every time you choose to ride with us. Whether you're commuting to work, exploring the city, or embarking on a road trip, we've got you covered with a fleet of well-maintained vehicles and professional drivers committed to delivering the highest standards of service.
                                </p>
                                <p className="section_description">
                                    We believe in constantly improving and adapting to modern transportation challenges, using the latest technologies and best practices to provide you with a hassle-free experience. 
                                    With 24/7 customer support, easy bookings, and multiple service options, we are here to ensure your ride is as smooth and convenient as possible.
                                </p>


                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <span>
                                        <i class="ri-phone-line"></i>
                                    </span>

                                    <div>
                                        <h6 className="section_subtitle">Need Any Help</h6>
                                        <h4>+0012345386</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BecomeDriverSection />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6 className="section_subtitle">Experts</h6>
                            <h2 className="section_title">Our Memebers</h2>
                        </div>
                        <OurMembers />
                    </div>
                </div>
            </section>

        </>
    );
}

export default About;