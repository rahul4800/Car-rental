import { useEffect, useState } from "react";
//import serviceData from "../../assets/data/serviceData";
import "../../styles/servicesList.css";
import axios from "axios";

const ServicesList = () => {

    const [services, setServices] = useState([]);
    
    useEffect(() =>{
        axios.get(`http://localhost:4000/serviceData`)
        .then((res)=> setServices(res.data))
        .catch((err) => console.log(err))
    })

    return (
        <>
            {
                services.map((item) => (
                    <ServiceItem item={item} key={item.id} />
                ))
            }
        </>
    );
};

const ServiceItem = ({ item }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
            <div className="service_item">
                <span className="mb-3 d-inline-block">
                    <i class={item.icon} />
                </span>

                <h6>{item.title}</h6>
                <p className="section_description">{item.desc}</p>
            </div>
        </div>
    );

}

export default ServicesList;