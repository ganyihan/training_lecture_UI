import React, { Component } from 'react'
import './index.css'
export default class Nlp extends Component {
    render() {
        return (
            <div id="nlp-type" style={{ display: 'block', marginLeft: '35px', marginTop: '10px' }}>
                <div className="block" > Nlp <input placeholder='text input'/></div>
                <button className="btn1">Buy</button>
                <button className="btn2">Sell</button>
            </div>
        )
    }
}
