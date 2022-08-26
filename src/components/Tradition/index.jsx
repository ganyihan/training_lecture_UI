import React, { Component } from 'react'
import './index.css'

export default class Tradition extends Component {
    render() {
        return (
            <div id="trade-type" style={{ display: 'block' }}>
                <div style={{ marginLeft: '35px', marginTop: '10px' }}>
                    <div className="block">Client Name<input placeholder="text input" /></div>
                    <div className="block">Ticker<input placeholder="text input" /></div>
                    <div className="block">RIC<input placeholder="text input" /></div>
                    <div className="block">Size<input placeholder="text input" /></div>
                    <div className="block">Price<input placeholder="text input" /></div>
                    <div className="block">Currency<input placeholder="text input" /></div>
                    <div className="block">Issuer Sector<input placeholder="text input" /></div>
                    <div className="block">Salesperson<input placeholder="text input" /></div>
                    <div className="block">
                        HT/PT
                        <select className="select">
                            <option value="1">HT</option>
                            <option value="2">PT</option>
                        </select>
                    </div>
                    <button className="btn1">Buy</button>
                    <button className="btn2">Sell</button>
                </div>
            </div>
        )
    }
}
