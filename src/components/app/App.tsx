import "../../assets/scss/style.scss";

import { useEffect } from "react";

import HideLoader from "../loader/HideLoader";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import AboutUs from "../aboutUs/AboutUs";
import OurPuppies from "../ourPuppies/OurPuppies";
import Gallery from "../gallery/Gallery";
import ContactUs from "../contactUs/ContactUs";
import Benefits from "../benefits/Benefits";
import Documents from "../documents/Documents";
import Articles from "../articles/Articles";
import Delivery from "../delivery/Delivery";
import Footer from "../footer/Footer";

import { Navbar } from "../generalData/generalData";

function App() {
    useEffect(HideLoader, []);

    return (
        <>
            <Header />
            <main className="content">
                <Hero />
                <AboutUs setRef={Navbar.getRef("aboutUs")} />
                <OurPuppies />
                <Gallery setRef={Navbar.getRef("gallery")} />
                <ContactUs />
                <Benefits setRef={Navbar.getRef("benefits")} />
                <Documents />
                <Articles />
                <Delivery setRef={Navbar.getRef("delivery")} />
            </main>
            <Footer />
        </>
    );
}

export default App;
