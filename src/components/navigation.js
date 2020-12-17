import React,{Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

class Navigation extends Component{
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            return <Nav.Item key={idx}>
                <Link to={item.path} className="nav-link text-green">
                    {item.name}
                </Link>
            </Nav.Item>;
        });
        return(
            <Navbar bg="light" variant="light" expand="md" className="position-absolute w-100 z-100 shadow border-bottom" collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/" className="font-weight-bold font-logo decoration-none text-green">
                        <img src="/img/navbar_logo.png" alt="logo" className="mr-2"/>
                        Training Studio
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto text-right px-3">
                        {menuContent}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;