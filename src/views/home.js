import React,{Component} from "react";
import {homeCfg} from "../config";
import AboutDesc from "../components/about-desc";
import IndexSlider from "../components/index-slider";
import OfferDesc from "../components/offer-desc";
import ContactData from "../components/contact-data";
import ContactForm from "../components/contact-form";

class Home extends Component{
    render(){
        return(        
            <main className="minh-100vh">
                <IndexSlider/>
                <AboutDesc backLink={homeCfg[0]}/>
                <OfferDesc backLink={homeCfg[1]}/>
                <ContactData backLink={homeCfg[2]}/>
                <ContactForm/>
            </main>
        );
    }
}

export default Home;