import React from 'react';
import '../../css/chart.css';
import HighCharts from './HighCharts';

export default function Chart() {
  return (
    <div>
      <div className="flow-analysis">
        <div className="flow-tip">Flow Analysis</div>
        <HighCharts></HighCharts>
      </div>
    </div>
  );
}