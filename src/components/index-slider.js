import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class IndexSlider extends Component{
    render(){
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-dark minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item className="bg-green">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover mix-blend"
                                    src="img/slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo text-orange">
                                        Online Computer Classes
                                    </h1>
                                    <p className="initialism">
                                        If you’re looking to boost your computer skills, there are many free or low-cost 
                                        classes you can take that will help you 
                                    </p>
                                    <Link to="/offer">
                                        <Button variant="light" className="rounded-pill">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-green">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover mix-blend"
                                    src="img/slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo text-orange">
                                        Authorized Partner
                                    </h1>
                                    <p className="initialism">
                                        We are authorized partner of many leading IT companies, what allows us
                                        to prived the highest quality courses for newest technologies.
                                    </p>
                                    <Link to="/partners">
                                        <Button variant="light" className="rounded-pill">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-green">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover mix-blend"
                                    src="img/slider/slide-3.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo text-orange">
                                        Contact now
                                    </h1>
                                    <p className="initialism">
                                        Our employees are for your disposal and answer all your questions.
                                        Contact us online, by phone or personally. 
                                    </p>
                                    <Link to="/contact">
                                        <Button variant="light" className="rounded-pill">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default IndexSlider;