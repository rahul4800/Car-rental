import { Link, useNavigate } from "react-router-dom";
import "../../styles/adminLogin.css";
import { useState } from "react";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(username === "admin" && password === "admin"){
            navigate("/admindashboard")
        } else{
            alert("Invalid Credentials!");
            
        }
    }

    return (
        <section className="container-fluid">
            <div className="container admin-form">

                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="admin-heading">
                        <h1 className="">Admin Login</h1>
                    </div>

                    <input type="text" placeholder="Username"  
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                    <input type="password" placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} required />

                    <div className="d-flex justify-content-between align-center pt-3">
                        <Link to="#" className="text-danger">Forget Password?</Link>
                        <input type="submit" placeholder="submit" className="submit-btn" 
                         value={"Login"}
                        />
                    </div>

                </form>
            </div>
        </section>
    );
}

export default AdminLogin;