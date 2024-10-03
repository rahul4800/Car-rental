import driverImg from "../assets/all-images/toyota-offer-2.png";
import "../styles/become-driver.css";

const BecomeDriverSection = ()=>{
    return(
        <section className="become_driver">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 become_driver-img">
                        <img src={driverImg} alt="" className="w-100" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <h2 className=" section_title become_driver-title text-white">
                        Do You Want to Earn With Us? So Don't Be Late
                        </h2>

                        <button className="btn become_driver-btn mt-4 ">
                            Become a Driver
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BecomeDriverSection;