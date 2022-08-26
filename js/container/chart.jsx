import React from 'react';
import HighCharts from '../component/HighCharts';

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