import CommonSection from "../components/UI/CommonSection";
//import CarItem from "../components/UI/CarItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const CarListing = () => {
    const [cars, setCars] = useState([]);
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:4000/carData`)
            .then((res) => setCars(res.data))
            .catch((err) => console.log(err))
    },[]);

    const handleSort =(e) =>{
        setSortOption(e.target.value);
    }

    const sortedCars = [...cars].sort((a, b)=>{
        if(sortOption === "low"){
            return a.price - b.price;
        } else if (sortOption === "high"){
            return b.price - a.price;
        }
        return 0;
    })

    return (
        <>
            <CommonSection title="Car Listing" />
            <section >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center gap-3 mb-5">
                                <span className="d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> Sort By
                                </span>

                                <select onChange={handleSort} value={sortOption} className="select-option" >
                                    <option >Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </div>

                        {
                        sortedCars.map((item) => {
                            return (
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
                                            <Link to={`/cars/${item.carName}`}>Rent</Link>
                                        </button>

                                        <button className="w-50 car_item-btn car_btn-details">
                                            <Link to={`/cars/details/${item.carName}`}>Details</Link>
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    }

                    </div>
                    
                </div>

            </section>
        </>
    );
}

export default CarListing;