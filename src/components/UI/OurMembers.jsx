import { Link } from "react-router-dom";
import ava1 from "../../assets/all-images/ava-1.jpg";
import ava2 from "../../assets/all-images/ava-2.jpg";
import ava3 from "../../assets/all-images/ava-3.jpg";

import "../../styles/ourMembers.css";

const OUR_MEMBERS = [
    {
        name: "Jhon Doe",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava1,
    },

    {
        name: "David Lisa",
        experience: "3.5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava2,
    },

    {
        name: "Hilton King",
        experience: "4 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava3,
    },

    {
        name: "Jhon Doe",
        experience: "4.3 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava1,
    },
];

const OurMembers = () => {
    return (
        <>
            {
                OUR_MEMBERS.map((item, index) => (
                    <div className="col-lg-3 col-md-3 col-sm-4 " key={index}>
                        <div className="single_member">
                            <div className="single_member-img">
                                <img src={item.imgUrl} alt="" className="w-100" />

                                <div className="single_member-social">
                                    <Link to={item.fbUrl}>
                                        <i class="ri-facebook-line"></i>
                                    </Link>
                                    <Link to={item.twitUrl}>
                                        <i class="ri-twitter-line"></i>
                                    </Link>

                                    <Link to={item.linkedinUrl}>
                                        <i class="ri-linkedin-line"></i>
                                    </Link>

                                    <Link to={item.instUrl}>
                                        <i class="ri-instagram-line"></i>
                                    </Link>
                                </div>
                            </div>

                            <h6>{item.name}</h6>
                            <p>{item.experience}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default OurMembers;