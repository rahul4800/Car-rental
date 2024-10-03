import { Link } from "react-router-dom";
//import blogData from "../../assets/data/blogData";
import "../../styles/blogItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
    const [blogInfo, setBlogInfo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/blogData`)
            .then((res) => setBlogInfo(res.data))
            .catch((err) => console.log(err))
    })
    return (
        <div className="container mb-5">
            <div className="row text-center mt-3 mb-5">
                <h6 className="section_subtitle ">Our clients says</h6>
                <h2 className="section_title">Blog List</h2>
                {
                    blogInfo.map((item) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-6 mb-5 mt-4">
                                <div className="blog_item">
                                    <img src={item.imgUrl} alt=""  />
                                    <div className="blog_info p-3">
                                        <Link to={`blogs/${item.title}`} className="blog_title">
                                            {item.title}
                                        </Link>
                                        <p className="section_description mt-3">
                                            {item.description.length > 100 ? item.description.substr(0, 100) : item.description}
                                        </p>

                                        <Link to={`/blogs/${item.title}`} className="read_more">
                                            Read More
                                        </Link>

                                        <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
                                            <span className="blog_author">
                                                <i class="ri-user-line"></i> {item.author}
                                            </span>

                                            <div className="d-flex align-items-center gap-3">
                                                <span className=" d-flex align-items-center gap-1 section_description">
                                                    <i class="ri-calendar-line"></i> {item.date}
                                                </span>
                                            </div>

                                            <span className="d-flex align-items-center gap-1 section_description">
                                                <i class="ri-time-line"></i> {item.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}

// const BlogItem = ({ item }) => {
//     const { imgUrl, title, author, date, description, time } = item;
//     return (
        
//     );
// }


export default BlogList;