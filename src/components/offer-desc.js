import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class OfferDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>                
                <Row className="mx-auto text-center w-100 bg-white" id="integrations">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/bg-computer-classes.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Basic Computer Classes
                            </h3>
                            <p className="initialism">
                                LinkedIn is not just a professional social media platform, it is also a massive 
                                library of computer skills classes. A number of online reviews show LinkedIn 
                                Learning Center to be one of the best places for people to build their basic 
                                computer skills.                                 
                            </p>
                            <p className="initialism">
                                Also, if you haven’t already built a LinkedIn Profile, doing so will help you 
                                become acquainted with some critical computer skills to boost your professional 
                                career (as well as help you connect with peers and potential employers). To 
                                sign up, begin here and follow the directions for setting up your free account.                                
                            </p>
                            <div className="w-100 text-center">
                                {linking}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white" id="integrations">                    
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Productivity Software Skills
                            </h3>
                            <p className="initialism">
                                The Specialist program works much the same way as the Microsoft 356 Fundamentals 
                                course above. The classes are free, but if you want to advance to the next 
                                intermediate and expert level courses, you have to pay money in order to take 
                                and pass an exam. Nevertheless, if you feel that your MS Office skills are 
                                mediocre, these courses will help you feel more competent in your MS Office 
                                skills.                                 
                            </p>
                            <p className="initialism">
                                Asana is currently one of the top and most often used productivity software 
                                programs by businesses. Asana Academy provides basic and expert courses on 
                                both their software and general productivity. And the best thing about it: 
                                all the courses are free!
                            </p>
                            <div className="w-100 text-center">
                                {linking}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/bg-productivity.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OfferDesc;