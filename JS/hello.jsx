import React from "react";
import { render } from "react-dom";
import freGroup from './freGroup.jsx'
function Hello() {
    return <div>Hello World
    </div>
}
function init() {
    const containerEl = document.querySelector("#container")
    render(<Hello/>,containerEl)
}
export default Hello