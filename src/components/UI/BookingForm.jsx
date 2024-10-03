import "../../styles/bookingForm.css";
const BookingForm = () => {

    const handleBookingForm = (e) =>{
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleBookingForm} >
                <h3 className="mb-5 booking-heading">Booking Information</h3>
                <div className=" booking_form d-flex mb-2">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="First Name" />
                </div>
                <div className=" booking_form d-flex mb-2">
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Phone Number" />
                </div>
                <div className=" booking_form d-flex mb-2">
                    <input type="text" placeholder="From Address" />
                    <input type="text" placeholder="To Address" />
                </div>
                <div className="booking_form d-flex w-100 mb-4">
                    <select name="" id="" className=" w-100">
                        <option value="1 person">1 Person</option>
                        <option value="2 person">2 Person</option>
                        <option value="3 person">3 Person</option>
                        <option value="4 person">4 Person</option>
                        <option value="5+ person">5+ Person</option>
                    </select>
                    <select name="" id="" className=" w-100">
                        <option value="1 luggage">1 luggage</option>
                        <option value="2 luggage">2 luggage</option>
                        <option value="3 luggage">3 luggage</option>
                        <option value="4 luggage">4 luggage</option>
                        <option value="5+ luggage">5+ luggage</option>
                    </select>
                </div>
                <div className="booking_form booking-form-date d-flex mb-2 ">
                    <input type="date" placeholder="Journey Date" />
                    <input
                        type="time"
                        placeholder="Journey Time"
                        className="time__picker"
                    />
                </div>
                <textarea
                    rows={5}
                    type="textarea"
                    className="textarea w-100"
                    placeholder="Write"
                ></textarea>
            </form>
        </>
    );
}

export default BookingForm;