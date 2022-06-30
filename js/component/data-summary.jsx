import React from "react";
import '../../css/demo.css'
export default function DataSummary() {
    return   <div class="data-summary">
    <div class="summary-items">
        <span>
            <label class="total-buy">
                Total Buy: 1,300.26
            </label>
        </span>
        <span>
            <label class="total-sell">
                Total Sell: 1,300.26
            </label>
        </span>
        <span>
            <label class="net-quantity">
                Net Quantity: 1,300.26
            </label>
        </span>
        <span>
            <label class="total-buy">
                Total Buy Notional: 1,300.26
            </label>
        </span>
        <span>
            <label class="total-sell">
                Total Sell Notional: 1,300.26
            </label>
        </span>
        <span>
            <label class="net-quantity">
                Net Notional: 1,300.26
            </label>
        </span>
    </div>
    <span class="records">
        Records: 4
    </span>
</div>  
}