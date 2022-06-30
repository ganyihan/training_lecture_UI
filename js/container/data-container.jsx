import React from "react";
import DataTable from "../component/data-table"
import DataSummary from "../component/data-summary"
import '../../css/demo.css'
export default function DataDisplay() {
    return <div>
        <DataTable></DataTable>
        <DataSummary></DataSummary>
    </div>
}