import React from "react";
export default function TradeType(props) {
    function clickHandler(evt) {
        const dom = evt.target.dataset.value;
        if (dom == 'nlp') {
            document.getElementsByClassName('trade-type-item')[1].classList.add('active');
            document.getElementsByClassName('trade-type-item')[0].classList.remove('active');
            document.querySelector('.trade-traditional').style.display = 'none';
            document.querySelector('.trade-nlp').style.display = 'flex';
        } else {
            document.getElementsByClassName('trade-type-item')[1].classList.remove('active');
            document.getElementsByClassName('trade-type-item')[0].classList.add('active');
            document.querySelector('.trade-traditional').style.display = 'flex';
            document.querySelector('.trade-nlp').style.display = 'none';
        }
    }

    if (props.chose) {
        props.chose(target.dataset.value);
    }

    return <div className="trade-type" onClick={clickHandler}>
               <div className="trade-type-item active" data-value="traditional">Traditional Trade</div>
                <div className="trade-type-item" data-value="nlp">NLP Trade</div>
            </div>
}