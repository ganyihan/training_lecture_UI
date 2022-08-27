import React, { Component } from 'react'
import './index.css'

export default class table extends Component {

    render() {
        const { data } = this.props;
        return (
            <div className="tall">
                <table className="t" id="stu" locale={{ emptyText: "暂无数据" }}>
                    <tbody>
                        <tr className="head">
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Date
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Client Name
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Client Side
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Ticker
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        RIC
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Price
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Size
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Notional USD
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Currency
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Issuer Sector
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Salesperson
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        HT/PT
                                    </div>
                                    <div>
                                        <span className="iconfont icon-filter-fill icon"></span>
                                    </div>

                                </div>
                            </td>
                        </tr>
                        {
                            data.table.map((value, index) => {
                                return (
                                    <tr key={index} >
                                        <td >{value.date}</td>
                                        <td >{value.clientName}</td>
                                        <td >{value.clientSide}</td>
                                        <td >{value.ticker}</td>
                                        <td >{value.ric}</td>
                                        <td >{value.price}</td>
                                        <td >{value.size}</td>
                                        <td >{value.notionalUSD}</td>
                                        <td >{value.currency}</td>
                                        <td >{value.issuerSector}</td>
                                        <td >{value.salesperson}</td>
                                        <td >{value.type}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                <div style={{ marginTop: '5px', backgroundColor: '#212f3d' }}>
                    <div style={{ width: '120px', display: 'inline-block', marginLeft: '5px' }}>
                        <span style={{ color: '#00b755' }}>Total Buy:{data.total.name}</span>
                        
                    </div>
                    <div style={{ width: '120px', display: 'inline-block' }}>
                        <span style={{ color: '#b65d5d' }}>Total Sell:</span>1,300.26
                    </div>
                    <div style={{ width: '140px', display: 'inline-block' }}>
                        <span style={{ color: 'rgb(120,140,161)' }}>Net Quantity:</span>1,300.26
                    </div>

                    <div style={{ width: '170px', display: 'inline-block' }}>
                        <span style={{ color: '#00b755' }}>Total Sell Notional:</span>1,300.26
                    </div>

                    <div style={{ width: '140px', display: 'inline-block' }}>
                        <span style={{ color: '#b65d5d' }}>Net Notional:</span>1,300.26
                    </div>

                    <div style={{ width: '140px', display: 'inline-block' }}>
                        <span style={{ color: 'rgb(120,140,161)' }}>NTotal Record:</span>1,300.26
                    </div>
                </div>

            </div>
        )
    }
}
