import { Link } from "react-router-dom";
import "../../styles/carItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CarItem = () => {
    //const { imgUrl, model, carName, automatic, speed, price } = props.item;

    const [carItems, setCarItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/carData`)
            .then((res) => setCarItems(res.data))
            .catch((err) => console.log(err))
    })

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5 ">
                            <h6 className="section_subtitle" >Come with</h6>
                            <h2 className="section_title">Hot Offers</h2>
                        </div>
                        {
                            carItems.slice(0, 6).map((item) => (
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-5" key={item.index}>
                                    <div className="car_item">
                                        <div className="car_img">
                                            <img src={item.imgUrl} alt="" className="w-100" />
                                        </div>

                                        <div className="car_item-content">
                                            <h4 className="text-center">{item.carName}</h4>
                                            <h6 className="text-center">₹{item.price}.00<span>/ Day</span></h6>
                                        </div>

                                        <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb-4 ">
                                            <span className=" d-flex align-items-center gap-1">
                                                <i class="ri-car-line"></i> {item.model}
                                            </span>
                                            <span className=" d-flex align-items-center gap-1">
                                                <i class="ri-settings-2-line"></i> {item.transmission}
                                            </span>
                                            <span className=" d-flex align-items-center gap-1">
                                                <i class="ri-timer-flash-line"></i> {item.average}
                                            </span>
                                        </div>

                                        <button className="w-50 car_item-btn car_btn-rent">
                                            <Link to={`/cars/rent/${item.carName}`}>Rent</Link>
                                        </button>

                                        <button className="w-50 car_item-btn car_btn-details">
                                            <Link to={`/cars/details/${item.carName}`}>Details</Link>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>
            </section>

        </>
    );
}

export default CarItem;