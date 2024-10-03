import BlogList from "../components/UI/BlogList";
import CommonSection from "../components/UI/CommonSection";


const Blog = () =>{
    return(
        <div>
            <CommonSection title="Blogs" />
            <section className="container">
                <div className="row">
                    <BlogList />
                </div>
            </section>
        </div>
    );
}

export default Blog;