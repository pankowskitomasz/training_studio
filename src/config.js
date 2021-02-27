import {Redirect} from "react-router-dom";
import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import Offer from "./views/offer";
import PrivacyPolicy from "./views/privacy";
import Login from "./views/login";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:false, path:"/about",name:"About",view:<About/>},
        {navItem:true, exact:false, path:"/offer",name:"Offer",view:<Offer/>},
        {navItem:true, exact:false, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:true, exact:false, path:"/login",name:"Login",view:<Login/>},
        {navItem:false, exact:false, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const homeCfg = [
    {navItem:true, exact:false, path:"/about",name:"See more",view:<About/>},
    {navItem:true, exact:false, path:"/offer",name:"See more",view:<Offer/>},
    {navItem:true, exact:false, path:"/contact",name:"Contact",view:<Contact/>},
];

const msgCfg = {
    pageSize: 10
};

const APP_LINKS = {
    messages: "http://localhost/demo/training_studio/public/message.php",
    users: "http://localhost/demo/training_studio/public/user.php"
};


export {
    appCfg,
    homeCfg,
    msgCfg,
    APP_LINKS
}