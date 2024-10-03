import BookingForm from "./BookingForm";
import PaymentMethod from "./PaymentMethod";


const CarRent = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <BookingForm />
                </div>
                <div className="col-md-6 col-xs-12 pt-5">
                    <PaymentMethod />
                </div>
            </div>
        </div>
    );
}

export default CarRent;