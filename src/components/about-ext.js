import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-white" id="integrations">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/bg-online-learning.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Tailored Online Learning 
                            </h3>
                            <p className="initialism">
                                None of today’s advanced smartphones, sleek tablets or powerful laptops would 
                                be around today without the hard work of computer programmers. Online computer 
                                programming courses offer individuals the opportunity to learn everything they 
                                need to know to create the programs that run today’s technology. Different from 
                                online degrees, these courses can be taken individually and are designed for 
                                budding programmers and professionals alike. For more information about specific 
                                online programming courses, use this guide to find online programming classes and 
                                learn about the tools necessary to succeed in these online programs.                                
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white" id="integrations">                    
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Online Programming classes
                            </h3>
                            <p className="initialism">
                                With so many options for online computer programming courses, it can be difficult 
                                to figure out which class will best meet your particular needs and skill level. 
                                The following search tool allows prospective students to narrow down a manageable 
                                list of potential classes by filtering online course options based on cost, 
                                institution and time to complete.                    
                            </p>
                            <p className="initialism">
                                Deciding which type of online computer programming course will be a best fit depends 
                                on the student’s end goal. Some students want to work their way through a two- or 
                                four-year degree, while others want to earn the certificates they need to start in 
                                entry-level work. Others want to pursue graduate studies, while there are those who 
                                aren’t seeking a degree or diploma, and simply want the information they can garner 
                                from computer programming courses. Here’s more detail on the various paths a student 
                                might take.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/bg-programming.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutExt;