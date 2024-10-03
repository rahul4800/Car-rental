import axios from "axios";
import { useState } from "react";


const Addservice = ()=> {
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");
    const [desc, setDesc] = useState("");

    const postServiceData = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:4000/serviceData`,{title, icon, desc})
        .then((res) => {
            setTitle("")
            setDesc("")
            setIcon("")
        })
    }

    return(
        

        <section className="container p-3 text-center add_car-content ">
            <h1 className="text-danger">Add Service Data</h1>
            <form onSubmit={postServiceData} className="add-car-form"   >
                <input type="text" name="title" value={title} onClick={(e)=> setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" name="icon" value={icon} onClick={(e)=> setIcon(e.target.value)} placeholder="Icon" required />
                <input type="img" name="desc" value={desc} onClick={(e)=> setDesc(e.target.value)} placeholder="Description" required />

                <input type="submit" className="form-control-btn" />
            </form>
        </section>
    );
}

export default Addservice;