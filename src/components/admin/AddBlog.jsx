import axios from "axios";
import { useState } from "react";
import "../../styles/addBlog.css";

const AddBlog = ()=> {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");

    const postBlogData = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:4000/blogData`,{title, author, imgUrl, time, date, desc})
        .then((res) => {
            setTitle("")
            setAuthor("")
            setImgUrl("")
            setDate("")
            setTime("")
            setDesc("")
        })
    }
    return(
        <div className="container p-3 add_blog-content">
            <h1 className="text-danger">Add Blog</h1>
            <form onSubmit={postBlogData} className="add-blog-form">
            <input type="text" name="title" value={title} onClick={(e)=> setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" name="author" value={author} onClick={(e)=> setAuthor(e.target.value)} placeholder="Author" required />
                <input type="img" name="imgUrl" value={imgUrl} onClick={(e)=> setImgUrl(e.target.value)} placeholder="Image Url" required />
                <input type="text" name="time" value={time} onClick={(e)=> setTime(e.target.value)} placeholder="Time" required  />
                <input type="date" name="date" value={date} onClick={(e)=> setDate(e.target.value)} placeholder="Date" required />
                <input type="text" name="desc" value={desc} onClick={(e)=> setDesc(e.target.value)} placeholder="Description" required />
                <input type="submit" className="form-control-btn" />
            </form>
        </div>
    );
}

export default AddBlog;