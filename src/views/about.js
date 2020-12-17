import React,{Component} from "react";
import AboutDesc from "../components/about-desc";
import AboutExt from "../components/about-ext";


class About extends Component{
    render(){
        return(          
            <main className="minh-100vh p-header bg-white">     
                <AboutDesc/>
                <AboutExt/>
            </main>
        );
    }
}

export default About;