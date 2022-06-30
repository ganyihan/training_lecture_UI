import React from "react";
import '../../css/demo.css'

export default function FreGroup(props) {

    function clickHandler(evt) {
        const currentTarget = evt.currentTarget;
        const target = evt.target;
        console.log(target);
        if (target.classList.contains('fre-group'))
            return       
        const activeElement = currentTarget.querySelector('.fre-item.active');
        activeElement.classList.toggle('active')
        target.classList.toggle('active')
    }

    if (props.chose) {
        props.chose(target.dataset.value);
    }

    return <div class="fre-group" onClick={clickHandler}>
                <span class="fre-item active" data-value="1D">1D</span>
                <span class="fre-item" data-value="1W">1W</span>
                <span class="fre-item" data-value="2W">2W</span>
                <span class="fre-item" data-value="1M">1M</span>
                <span class="fre-item" data-value="3M">3M</span>
                <span class="fre-item" data-value="6M">6M</span>
                <span class="fre-item" data-value="1Y">1Y</span>
                <span class="fre-item" data-value="YTD">YTD</span>
            </div>
}