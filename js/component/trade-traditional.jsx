import React from "react";
export default function TradeTraditional() {
    return  <div className="trade-traditional">
                <div className="trade-input-items">
                    <div className="trade-input-item">
                        <div className="trade-input-title">Client Name</div>
                        <input className="trade-input" placeholder="text input"/>
                    </div>
                <div className="trade-input-item">
                     <div className="trade-input-title">Ticker</div>
                    <input className="trade-input" placeholder="text input"/>
                </div>
                <div className="trade-input-item">
                     <div className="trade-input-title">RIC</div>
                    <input className="trade-input" placeholder="text input"/>
                </div>
                <div className="trade-input-item">
                    <div className="trade-input-title">Size</div>
                    <input className="trade-input" placeholder="text input"/>
                 </div>
                <div className="trade-input-item">
                     <div className="trade-input-title">Price</div>
                    <input className="trade-input" placeholder="text input"/>
                </div>
                <div className="trade-input-item">
                    <div className="trade-input-title">Currency</div>
                    <input className="trade-input" placeholder="text input"/>
                </div>
                <div className="trade-input-item">
                    <div className="trade-input-title">Issuer Sector</div>
                <input className="trade-input" placeholder="text input"/>
                </div>
                <div className="trade-input-item">
                    <div className="trade-input-title">Salesperson</div>
                    <input className="trade-input" placeholder="text input"/>
                </div>
                <div>
                    <div className="trade-input-title">HT/PT</div>
                    <select className="trade-input">
                        <option value ="HT">HT</option>
                        <option value ="PT">PT</option>
                     </select>
                 </div>
                </div>
                <div className="trade-submit-btns">
                     <button className="trade-btn trade-buy">
                     Buy
                    </button>
                    <button className="trade-btn trade-sell">
                    Sell
                    </button>
                </div>
            </div>
}