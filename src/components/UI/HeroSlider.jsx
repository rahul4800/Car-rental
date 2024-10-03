import { Link } from "react-router-dom";
import "../../styles/heroSlider.css";

const HeroSlider = () => {
    const setting = {
        // fade: true,
        // speed: 2000,
        // autoplaySpeed: 5000,
        // infinite: true,
        // autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // pauseOnHover: false,
    }

    return (
        <section {...setting} className=" container-fluid hero_slider p-0">
            <div className="carousel slide" data-bs-ride="carousel" id="mainSlide" >
                <div className="carousel-inner">
                    <div className="carousel-item active slider_item1">
                        <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                        <button className="btn reserve_btn mt-4">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>

                    <div className="carousel-item slider_item2 ">
                        <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                        <button className="btn reserve_btn mt-4">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>

                    <div className="carousel-item slider_item3 ">
                        <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                        <button className="btn reserve_btn mt-4">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSlider;