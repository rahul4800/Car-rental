import Routing from "../routers/Routing";
import Footer from "./Footer";
import Header from "./Header";



const Layout = () =>{
    return(
        <>
            <Header />
            <div>
                <Routing />
                
            </div>
            <Footer />
        </>
    );
}

export default Layout;