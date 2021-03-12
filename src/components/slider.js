import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class Slider extends Component{
    constructor(){
        super();
        this.state={
            carouselData:[
                {
                    captionDesc:"Our company provides wide range of sales and comapany management software including ERP software. Check our offer now!",
                    captionHeader:"Sales and Integration",
                    img:"img/slider/slide-1.jpg",
                    link:"/offer",
                    linkName:"See more"
                },
                {
                    captionDesc:"Our team includes specialists from sales and intergration areas. See more information about us.",
                    captionHeader:"Knowledge and experience",
                    img:"img/slider/slide-2.jpg",
                    link:"/about",
                    linkName:"See more"
                },
                {
                    captionDesc:"Our employees are for your disposal and answer all your questions. Contact us online, by phone or personally.",
                    captionHeader:"Contact now",
                    img:"img/slider/slide-3.jpg",
                    link:"/contact",
                    linkName:"See more"
                }
            ]
        };
    }
    render(){
        let btnLink;
        let carouselContent = this.state.carouselData.map((item,idx)=>{
            btnLink = (item.link==="")?"": <Link to={item.link} className="btn btn-warning rounded-pill">
                {item.linkName}
            </Link>;
            return <Carousel.Item key={idx}>
                    <img alt="slide" 
                        className="d-block w-100 h-100vh fit-cover"
                        src={item.img}/>
                    <Carousel.Caption className="mb-5">
                        <h1 className="display-3 font-weight-bold font-logo text-orange">
                            {item.captionHeader}
                        </h1>
                        <p className="initialism">
                            {item.captionDesc}
                        </p>
                        {btnLink}
                </Carousel.Caption>
            </Carousel.Item>;
        });
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-dark minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                       {carouselContent}
                       <Carousel.Item>
                            <img alt="slide" 
                                className="d-block w-100 h-100vh fit-cover"
                                src="img/slider/slide-1.jpg"/>
                            <Carousel.Caption className="mb-5">
                                <h1 className="display-3 font-weight-bold font-logo text-orange">
                                    
                                </h1>
                                <p className="initialism">
                                    
                                </p>
                                
                            </Carousel.Caption>
                        </Carousel.Item>;
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Slider;