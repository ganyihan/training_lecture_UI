import React from "react";
import TradeType from "../component/trade-type";
import TradeTraditional from "../component/trade-traditional";
import TradeNlp from "../component/trade-nlp";

export default function TradeTypeDisplay() {
    return <div>
        <TradeType></TradeType>
        <TradeTraditional></TradeTraditional>
        <TradeNlp></TradeNlp>
    </div>
}