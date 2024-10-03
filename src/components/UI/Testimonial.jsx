import "../../styles/testimonial.css";
import ava1 from "../../assets/all-images/ava-1.jpg";
import ava2 from "../../assets/all-images/ava-2.jpg";
import ava3 from "../../assets/all-images/ava-3.jpg";
import ava4 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
    return (
        <>
            <div className="col-lg-12 text-center mb-5 mt-5">
                <h6 className="section_subtitle" >Our clients says</h6>
                <h2 className="section_title">Testimonial</h2>
            </div>
            <div className="carousel slide" data-bs-ride="carousel" id="mainSlide">
                <div className="testimonial carousel-inner text-center p-5">

                    <div className="carousel-item active text-center bg-light">
                        <div className="row tesimonial-row ">
                            <div className="col-md-5 testimonial-data">
                                <p>
                                    "Flattered with availability of well maintained cars"

                                </p>
                                <div className="mt-3 d-flex align-item-center justify-content-center gap-4">
                                    <img src={ava1} alt="" className="w-25 h-25 rounded-4" />
                                    <div className="">
                                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                                        <p className="section__description">Customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 testimonial-data">
                                <p>
                                   " Booked a XUV with unlimited kms, very happy with car rental service"

                                </p>
                                <div className="mt-3  d-flex align-item-center justify-content-center gap-4">
                                    <img src={ava2} alt="" className="w-25 h-25 rounded-4" />
                                    <div className="">
                                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                                        <p className="section__description">Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item text-center bg-light">
                        <div className="row tesimonial-row ">
                            <div className="col-md-5 testimonial-data">
                                <p>
                                    "Booked a car for a family trip which was very comfortable and in great condition"

                                </p>
                                <div className="mt-3  d-flex align-item-center justify-content-center gap-4">
                                    <img src={ava3} alt="" className="w-25 h-25 rounded-4" />
                                    <div className="">
                                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                                        <p className="section__description">Customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 testimonial-data">
                                <p>
                                    "Most trustable car rental. Looking forward to using again"

                                </p>
                                <div className="mt-3  d-flex align-item-center justify-content-center gap-4">
                                    <img src={ava4} alt="" className="w-25 h-25 rounded-4" />
                                    <div className="">
                                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                                        <p className="section__description">Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default Testimonial;