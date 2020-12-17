import React,{Component} from "react";
import OfferDesc from "../components/offer-desc";


class Offer extends Component{
    render(){
        return(            
            <main className="minh-100vh p-header bg-white">                     
                <OfferDesc/>
            </main>
        );
    }
}

export default Offer;