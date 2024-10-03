import "../../styles/findCarForm.css";

const FindCarForm = () =>{
    return(
        <form action="">
            <div className=" find-car-container">
                <div className="form_group">
                    <input type="text" placeholder="From address" required />
                </div>
                <div className="form_group">
                    <input type="text" placeholder="To address" required />
                </div>
                <div className="form_group">
                    <input type="date" placeholder="Journey date" required />
                </div>

                <div className="form_group">
                    <input type="time" placeholder="Journey time" 
                        className="journey_time" required
                    />
                </div>

                <div className="select_group">
                    <select>
                        <option value="ac">AC Car</option>
                        <option value="non-ac">Non AC Car</option>
                    </select>
                </div>

                <div className="form_group">
                    <button className="btn find_car-btn">Find Car</button>
                </div>
                
            </div>
        </form>
    );
}

export default FindCarForm;