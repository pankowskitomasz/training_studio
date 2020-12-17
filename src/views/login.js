import React,{Component} from "react";
import LoginForm from "../components/login-form";
import SpacerTop from "../components/spacer-top";

class Login extends Component{
    render(){
        return(        
            <main className="minh-100vh p-header bg-white">
                <SpacerTop/>
                <LoginForm/>
            </main>
        );
    }
}

export default Login;