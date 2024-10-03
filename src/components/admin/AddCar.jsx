import axios from "axios";
import { useState } from "react";
import "../../styles/addCar.css";

const AddCar = ()=> {
    const [brand, setBrand] = useState("");
    const [carName, setCarName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [model, setModel] = useState("");
    const [transmission, setTransmission] = useState("");
    const [average, setAverage] = useState("");

    const postCarDetails=(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:4000/carData`,{brand,carName, imgUrl, model, transmission, average })
        .then((res) => {
           setBrand("")
           setCarName("")
           setImgUrl("")
           setModel("")
           setTransmission("")
           setAverage("") 
        })
    }

    return(
        <div className="container p-3 add_car-content ">
            <h1 className="text-danger">Add Car</h1>
            <form onSubmit={postCarDetails} className="add-car-form"   >
                <input type="text" name="brand" value={brand} onClick={(e)=> setBrand(e.target.value)} placeholder="Brand" required />
                <input type="text" name="carName" value={carName} onClick={(e)=> setCarName(e.target.value)} placeholder="Car name" required />
                <input type="img" name="imgUrl" value={imgUrl} onClick={(e)=> setImgUrl(e.target.value)} placeholder="Image Url" required />
                <input type="text" name="model" value={model} onClick={(e)=> setModel(e.target.value)} placeholder="Model" required  />
                <input type="text" name="transmission" value={transmission} onClick={(e)=> setTransmission(e.target.value)} placeholder="Transmission" required />
                <input type="text" name="average" value={average} onClick={(e)=> setAverage(e.target.value)} placeholder="Average" required />
                <input type="submit" className="form-control-btn" />
            </form>
        </div>
    );
}

export default AddCar;