import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/paymentMethod.css";

const PaymentMethod = () => {
    return (
        <>
            <div className="container-fluid pt-2">
                <h3 className="payment-heading">Payment Information</h3>
                <div className="payment">
                    <label htmlFor="" className="d-flex align-items-center gap-2">
                        <input type="radio" /> Direct Bank Transfer
                    </label>
                </div>
                <div className="payment">
                    <label htmlFor="" className="d-flex align-items-center gap-2">
                        <input type="radio" /> Cheque Payment
                    </label>
                </div>

                <div className="payment mt-3 d-flex align-items-center justify-content-between payment-masterCard">
                    <label htmlFor="" className="d-flex align-items-center gap-2 master-card-input">
                        <input type="radio" /> Master Card
                    </label>

                    <img src={masterCard} alt="" />
                </div>

                <div className="payment mt-3 d-flex align-items-center justify-content-between">
                    <label htmlFor="" className="d-flex align-items-center gap-2 ">
                        <input type="radio" /> Paypal
                    </label>

                    <img src={paypal} alt="" />
                </div>
                <div className="payment text-end mt-5">
                    <button>Reserve Now</button>
                </div>
            </div>
        </>
    );
}

export default PaymentMethod;