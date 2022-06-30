import React from "react";
import { render } from "react-dom";

function App(){
    return <div>Hello world</div>
}
function init(){
    const containerE1=document.querySelector('#container')
    render(<App/>,containerE1)
}
init()