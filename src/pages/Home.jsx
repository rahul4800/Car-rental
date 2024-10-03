
import BecomeDriverSection from "../components/BecomDriverSection";
import Helmet from "../components/Helmet";
import AboutSection from "../components/UI/AboutSection";
import BlogList from "../components/UI/BlogList";
import CarItem from "../components/UI/CarItem";
import FindCarForm from "../components/UI/FindCarForm";
import HeroSlider from "../components/UI/HeroSlider";
import ServicesList from "../components/UI/ServicesList";
import Testimonial from "../components/UI/Testimonial";
import "../styles/findCarForm.css";


const Home = () => {
    return (

        <Helmet title="Home">
            <section className="p-0 hero_slider-section">
                <HeroSlider />

                <div className="hero_form">
                    <div className="container">
                        <div className="row form_row">
                            <div className="col-lg-4 col-md-4">
                                <div className="find_cars-left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <FindCarForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutSection />
            {/* ========== services section ============ */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 text-center">
                            <h6 className="section_subtitle">See our</h6>
                            <h2 className="section_title">Popular Services</h2>
                        </div>

                        <ServicesList />
                    </div>
                </div>
            </section>

            {/* ========== car offer section ============ */}

            <CarItem />

            {/*===========BecomeDriveSection================ */}
            <BecomeDriverSection />

            {/*===========Testimonial section================ */}
            <Testimonial />

            {/*===========BlogList section================ */}
            <BlogList />
        </Helmet>

    );
}

export default Home;