import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

const Contact = () => {
    return(
        <>
        <CommonSection title="Contact" />
        <section className="container px-5">
            <div className="row">
                <div className="col-lg-7 col-md-7">
                    <h6 className="fw-bold mb-3 ">Get In Touch:-</h6>

                    <form action="" className="">
                        <div className="contact_form">
                            <input type="text" placeholder="Your name" />
                            <input type="text" placeholder="Email" />
                            
                            <textarea name="" id="" rows="5" placeholder="Message"></textarea>
                        </div>
                        <button className="contact_btn">Send Message</button>
                    </form>
                </div>

                <div className="col-lg-5 col-md-5 contact-details">
                    <div className="contact_info">
                        <h5>Contact Information</h5>
                        <p>Delhi, India</p>
                    </div>
                    <div className="contact_info">
                        <h6>Phone:</h6>
                        <p>+91-202-555-0149</p>
                    </div>
                    <div className="contact_info">
                        <h6>Email:</h6>
                        <p>cars@gmail.com</p>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;