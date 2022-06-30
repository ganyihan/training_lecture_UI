import React from "react";
import '../../css/demo.css'
export default function TradeTraditional() {
    return  <div class="trade-traditional">
                <div class="trade-input-items">
                    <div class="trade-input-item">
                        <div class="trade-input-title">Client Name</div>
                        <input class="trade-input" placeholder="text input"/>
                    </div>
                <div class="trade-input-item">
                     <div class="trade-input-title">Ticker</div>
                    <input class="trade-input" placeholder="text input"/>
                </div>
                <div class="trade-input-item">
                     <div class="trade-input-title">RIC</div>
                    <input class="trade-input" placeholder="text input"/>
                </div>
                <div class="trade-input-item">
                    <div class="trade-input-title">Size</div>
                    <input class="trade-input" placeholder="text input"/>
                 </div>
                <div class="trade-input-item">
                     <div class="trade-input-title">Price</div>
                    <input class="trade-input" placeholder="text input"/>
                </div>
                <div class="trade-input-item">
                    <div class="trade-input-title">Currency</div>
                    <input class="trade-input" placeholder="text input"/>
                </div>
                <div class="trade-input-item">
                    <div class="trade-input-title">Issuer Sector</div>
                <input class="trade-input" placeholder="text input"/>
                </div>
                <div class="trade-input-item">
                    <div class="trade-input-title">Salesperson</div>
                    <input class="trade-input" placeholder="text input"/>
                </div>
                <div>
                    <div class="trade-input-title">HT/PT</div>
                    <select class="trade-input">
                        <option value ="HT">HT</option>
                        <option value ="PT">PT</option>
                     </select>
                 </div>
                </div>
                <div class="trade-submit-btns">
                     <button class="trade-btn trade-buy">
                     Buy
                    </button>
                    <button class="trade-btn trade-sell">
                    Sell
                    </button>
                </div>
            </div>
}