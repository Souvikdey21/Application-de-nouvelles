import React from 'react';

//image

import Store from "./store/store";

import { Provider } from "react-redux";
import { Link } from "react-router-dom";
//routes
import Routes from "./routes";

function App() {
    return ( <
        Provider store = { Store } >

        <
        div className = "App" >
        <
        nav >
        <
        ul >
        <
        li > < Link to = "/index" > < /Link></li >
        <
        /ul> <
        ul >
        <
        li > < Link to = "/" > Search < /Link></li >
        <
        li > < Link to = "/tech" > Tech News < /Link></li >
        <
        /ul>  </nav > <
        header >
        <
        h1 > Application de nouvelles < /h1> < /
        header >


        <
        main >
        <
        Routes / >
        <
        /main>

        <
        /div> </Provider >

    );
}

export default App;