import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutDesc extends Component{
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
                <Row className="mx-auto text-center w-100 text-dark py-5">
                    <Col xs={10} md={8} lg={6} className="text-center mx-auto">
                        <h3 className="mb-3 font-logo">
                            About us
                        </h3>
                        <p className="initialism">
                            If you’re looking to boost your computer skills, there are many free or 
                            low-cost classes you can take that will help you get hired or promoted. 
                            If you’re interested in taking a class in-person, check with your local 
                            library, school district (many have adult education and vocational training 
                            programs), or community college to see what’s available near you.                              
                        </p>
                        <p className="initialism">
                            For online courses, here are our top picks for the best free or low-cost 
                            online computer classes in several different categories including basic 
                            computer, data science and analytics, programming, marketing,  productivity, 
                            and graphic design.
                        </p>
                        {linking}
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutDesc;