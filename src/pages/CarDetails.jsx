
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/carDetails.css";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
    const [singleCar, setSingleCar] = useState(null);
    const { carName } = useParams();
    const [showBookingForm, setShowBookingForm] = useState(false);
    //const singleCarItem = singleCar.find((item) => item.carName === carName)

    useEffect(() => {
        axios.get(`http://localhost:4000/carData`)
            .then((res) => {
                

                const selectedCar = res.data.find(item => item.carName === carName);
                setSingleCar(selectedCar);
            })
            .catch((err) => console.log(err))
    }, [carName]);

    if (!singleCar) {
        return <p>Loading car details....</p>;
    }

    const handleBooking = () => {
        setShowBookingForm(true);

    }

    return (
        <>
            <section className="Container px-5">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <img src={singleCar.imgUrl} alt="" className="w-100" />
                    </div>
                    <div className="col-md-6 p-5 car-detail-info">
                        <h1>{singleCar.carName}</h1>
                        <div className="car-rating ">
                            <p className="d-flex align-item-center">Price: ₹<span>{singleCar.price} /day</span></p>

                            <div className="d-flex ">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                <span>({singleCar.rating} rating)</span>
                            </div>
                        </div>
                        <p className="car-descrip">{singleCar.description}</p>

                        <div className="car-detail-features">
                            <div>
                                <p><span><i class="ri-car-line"
                                    style={{ color: "#f9a826" }}
                                ></i>{" "}</span>{singleCar.model}</p>

                                <p><span><i
                                    class="ri-settings-line"
                                    style={{ color: "#f9a826" }}
                                ></i>{" "}</span>{singleCar.transmission}</p>
                            </div>

                            <div>

                                <p><span> <i
                                    class="ri-timer-flash-line"
                                    style={{ color: "#f9a826" }}
                                ></i>{" "}</span>{singleCar.average}</p>


                                <p> <span> <i
                                    c class="ri-map-pin-line"
                                    style={{ color: "#f9a826" }}
                                ></i>{" "}</span>{singleCar.gps}</p>
                            </div>

                        </div>
                        <button className=" btn-booking" onClick={handleBooking}>Book Now</button>
                    </div>

                </div>

                <div className="">
                
                        {
                            showBookingForm && (
                                <>
                                    <div className="row">
                                        <div className="col-md-7 ">
                                            <BookingForm />
                                        </div>
                                        <div className="col-md-5 mt-5 ">
                                            <PaymentMethod />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    
                </div>
            </section>
        </>
    );
}

export default CarDetails;