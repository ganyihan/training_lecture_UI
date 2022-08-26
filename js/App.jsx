import React from 'react';
import '../css/demo.css'
import TradeTypeDisplay from './container/trade-type-container';
import DataDisplay from './container/data-container';
import FreGroupDisplay from './container/fre-group-container';
import Chart from './container/chart';

export default function App() {
    return <div>
        <TradeTypeDisplay></TradeTypeDisplay>
        <FreGroupDisplay></FreGroupDisplay>
        <DataDisplay></DataDisplay>
        <Chart></Chart>
        </div>
}
