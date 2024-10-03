import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../styles/aboutSection.css";

const AboutSection = () => {
    return (
        <section className="about_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about_section-content">
                            <h4 className="section_subtitle">About Us</h4>
                            <h2 className="section_title">Welcome to car rent service</h2>
                            <p className="section_description">
                            Car rental proudly stands as the only platform in India that offers rentals for  
                            self-driven cars under one roof. Whether you're looking for a 
                              vehicle ranging from compact models to spacious SUVs, we have you covered. 
                            Our diverse fleet is well maintained to ensure every journey is smooth, safe, and enjoyable.
                            </p>
                        </div>

                        <div className="about_section-item d-flex align-item-center">
                            <p className="section_description d-flex align-item-center gap-2">
                            <i class="ri-checkbox-circle-line"></i> On-time doorstep service
                            </p>

                            <p className="section_description d-flex align-item-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Regular service & maintenance
                            </p>
                        </div>

                        <div className="about_section-item d-flex align-item-center">
                            <p className="section_description d-flex align-item-center gap-2">
                            <i class="ri-checkbox-circle-line"></i> Choose 'Unlimited kms' plan
                            </p>

                            <p className="section_description d-flex align-item-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Flexible pricing plans
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6" >
                        <div className="about_img">
                            <img src={aboutImg} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;