import React from "react";
export default function DataSummary() {
    return   <div className="data-summary">
    <div className="summary-items">
        <span>
            <label className="total-buy">
                Total Buy: 1,300.26
            </label>
        </span>
        <span>
            <label className="total-sell">
                Total Sell: 1,300.26
            </label>
        </span>
        <span>
            <label className="net-quantity">
                Net Quantity: 1,300.26
            </label>
        </span>
        <span>
            <label className="total-buy">
                Total Buy Notional: 1,300.26
            </label>
        </span>
        <span>
            <label className="total-sell">
                Total Sell Notional: 1,300.26
            </label>
        </span>
        <span>
            <label className="net-quantity">
                Net Notional: 1,300.26
            </label>
        </span>
    </div>
    <span className="records">
        Records: 4
    </span>
</div>  
}