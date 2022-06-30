import React from "react";
import { render } from "react-dom";



function freGroup() {

    function clickHandler(evt) {
        const curTarget = evt.curTarget
        const target = evt.target

        const activeEl = curTarget.querySelector('.fre-item.active')
        activeEl.classList.toggle('active')

        target.classList.toggle('active')
        if( props.selectFre) {
            props.selectFre(target.dataset.value) 
        }
    }
    return <div class="fre-group" onClick={clickHandler}>
        <span data-value= "1D" class="fre-item active">1D</span>
        <span data-value= "1W" class="fre-item">1W</span>
        <span data-value= "2W" class="fre-item">2W</span>
        <span data-value= "1M" class="fre-item">1M</span>
        <span data-value= "3M" class="fre-item">3M</span>
        <span data-value= "6M" class="fre-item">6M</span>
        <span data-value= "1Y" class="fre-item">1Y</span>
        <span data-value= "YTD" class="fre-item">YTD</span>
    </div>
}
function init() {
    const elem = document.querySelector("#container")
    render(<freGroup/>,elem)
}
// init()
export default freGroup