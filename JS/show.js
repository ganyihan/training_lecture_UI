// import Hello from './hello.jsx'
// import freGroup from './freGroup.jsx'
// import React from 'react'
// import { render } from 'react-dom'



function selectTradeType(evt) {
    const  tradeTypeEl = evt.currentTarget
    const activeEl = tradeTypeEl.querySelector('.btn-trade.active')
    if(activeEl) {
        activeEl.classList.remove('active')
        const type = activeEl.dataset.value
        document.querySelector(`.btn-trade-${type}`).style.display='none' 
    }
    const itemEl = evt.target
    itemEl.classList.add('active')
    const type = itemEl.dataset.value
    document.querySelector(`.btn-trade-${type}`).style.display='flex'
}
function selectFreGroup(evt) {
    const freGroupEl = evt.currentTarget 
    const activeEl = evt.querySelector('.fre-item.active')
    if(activeEl) {
        activeEl.classList.remove('active')
    }
    const itemEl = evt.target
    itemEl.classList.add('active')
}
// function sendData() {
//     const data = {username: 'example'};
//     fetch('http://127.0.0.1:8080/test',{
//         method:'post',
//         body:JSON.stringify(data),
//     })
//     .then(Response => Response.json())
//     .then(data => {
//         console.log('success',data);
//     })
//     .catch((error) => {
//     console.error('error',error); }) 
// }
window.onload = function() {
    const tradeType = document.querySelector('.trade-type-item')
    tradeType.addEventListener('click',(evt) => {
         selectTradeType(evt);
        //  sendData();
    })
    const freGroup = document.querySelector('.fre-group')
    freGroup.addEventListener('click',(evt1) => {

    })
}
// render(<Hello/>,document.getElementById('hello'))
// render(<freGroup/>,document.getElementById('freGroup'))