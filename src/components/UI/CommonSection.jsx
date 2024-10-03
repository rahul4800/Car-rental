import "../../styles/commonSection.css";

const CommonSection = ({title}) =>{
    return(
        <section className=" common_section mb-5">
            <div className="container text-center">
                <h1 className="text-light">{title}</h1>
            </div>
        </section>
    );
}

export default CommonSection;