import React, { Component } from 'react'
import { Pagination } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import './index.css'
// import { current } from '@reduxjs/toolkit';
import PubSub from "pubsub-js"

export default class table extends Component {

    render() {
        return (
            <div className="tall">
                <table className="t" id="stu" locale={{ emptyText: "暂无数据" }}>
                    <tbody>
                        <tr className="head">
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Date
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('dateSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('dateSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Client Name
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('clientNameSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('clientNameSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Client Side
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click3('clientSide', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click4('clientSide', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Ticker
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('tickerSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('tickerSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        RIC
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('ricSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('ricSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Price
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('priceSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('priceSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Size
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('sizeSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('sizeSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Notional USD
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('notionalUsdSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('notionalUsdSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Currency
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('currencySort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('currencySort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Issuer Sector
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('issuerSectorSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('issuerSectorSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        Salesperson
                                    </div>
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click1('salesPersonSort', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click2('salesPersonSort', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ lineHeight: '5px' }}>
                                    <div style={{ display: 'inline-block', float: 'left', marginTop: '8%' }}>
                                        HT/PT
                                    </div>
                                    {/* <select value={}>
                                        <option>HT</option>
                                        <option>PT</option>
                                    </select> */}
                                    <div style={{ display: 'inline-block', float: 'right' }}>
                                        <div onClick={(e) => this.click3('ht_pt', this.props.data.choose)} className="i1">
                                            <CaretUpOutlined />
                                        </div>
                                        <div onClick={(e) => this.click4('ht_pt', this.props.data.choose)} className="i1">
                                            <CaretDownOutlined />
                                        </div>

                                    </div>
                                </div>
                            </td>
                        </tr>
                        {
                            this.state.table.map((value, index) => {
                                return (
                                    <tr key={index} >
                                        <td >{value.date}</td>
                                        <td >{value.clientName}</td>
                                        <td style={{
                                            color: value.clientSide === 'Buy' && '#00b755' || '#b65d5d',
                                        }}>{value.clientSide}</td>
                                        <td >{value.ticker}</td>
                                        <td >{value.ric}</td>
                                        <td >{value.price}</td>
                                        <td >{value.size}</td>
                                        <td >{value.notionalUsd}</td>
                                        <td >{value.currency}</td>
                                        <td >{value.issuerSector}</td>
                                        <td >{value.salesperson}</td>
                                        <td >{value.htPt}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                <div style={{ marginTop: '5px', backgroundColor: '#212f3d', marginBottom: '2px' }}>
                    <div style={{ width: '140px', display: 'inline-block', marginLeft: '5px' }}>
                        <span style={{ color: '#00b755' }}>Total Buy:</span> {this.state.data.totalBuy}
                    </div>
                    <div style={{ width: '140px', display: 'inline-block' }}>
                        <span style={{ color: '#b65d5d' }}>Total Sell:</span> {this.state.data.totalSell}
                    </div>
                    <div style={{ width: '140px', display: 'inline-block' }}>
                        <span style={{ color: 'rgb(120,140,161)' }}>Net Quantity:</span> {this.state.data.netQuantity}
                    </div>

                    <div style={{ width: '200px', display: 'inline-block' }}>
                        <span style={{ color: '#00b755' }}>Total Sell Notional:</span> {this.state.data.totalSellNotional}
                    </div>

                    <div style={{ width: '200px', display: 'inline-block' }}>
                        <span style={{ color: '#b65d5d' }}>Total Buy Notional:</span> {this.state.data.totalBuyNotional}
                    </div>

                    <div style={{ width: '200px', display: 'inline-block' }}>
                        <span style={{ color: 'rgb(120,140,161)' }}>Net Notional:</span> {this.state.data.netNotional}
                    </div>
                    <div style={{ display: 'inline-block', float: 'right', marginTop: '-2.5px' }}>
                        <Pagination size="small"
                            defaultPageSize={5}
                            total={this.state.all}
                            onChange={this.onChange}
                            current={this.state.page} />
                    </div>
                </div>

            </div>
        )
    }

    state = { choose: '', how: '', page: 1, table: [], data: {}, all: 0 }
    // 声明周期 组件完成挂载之后
    componentDidMount() {
        // mykeyvalue表示符  msg报错信息  data传递过来的数据
        PubSub.subscribe("page", (msg, data) => {
            // console.log("当前页数：", data);
            this.setState({
                page: data,
                choose:''
            })
        })

        PubSub.subscribe("table", (msg, data) => {
            // console.log("当前表格内容：", data);
            this.setState({
                table: data
            })
        })

        PubSub.subscribe("data", (msg, data) => {
            // console.log("当前统计量", data);
            this.setState({
                data: data
            })
        })

        PubSub.subscribe("total", (msg, data) => {
            // console.log("当前统计量", data);
            this.setState({
                all: data
            })
        })

    }

    //分页切换
    onChange = (page) => {
        this.setState({ page: page })
        var who = this.state.choose
        var request = {
            "frequency": this.props.data.choose,
            "ht_pt": "Both",
            "clientSide": "Both",
            "currentPage": page,
            "pageSize": 5,
            "dateSort": 0,
            "clientNameSort": 0,
            "tickerSort": 0,
            "ricSort": 0,
            "sizeSort": 0,
            "priceSort": 0,
            "notionalUsdSort": 0,
            "currencySort": 0,
            "issuerSectorSort": 0,
            "salesPersonSort": 0
        }
        if (who === 'clientSide') {
            if (this.state.how === '1') {
                request[who] = "Buy"
            } else {
                request[who] = "Sell"
            }
        } else if (who === 'ht_pt') {
            if (this.state.how === '1') {
                request[who] = "HT"
            } else {
                request[who] = "PT"
            }

        } else {
            request[who] = this.state.how;
        }

        console.log("分页请求")
        console.log(request)
        fetch('/stock-service/stock-service/trade/queryTradeRecord/', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            var temp = res.data.tradeRecordList;
            for (var i = 0; i < temp.length; i++) {
                temp[i].date = this.formatTime(temp[i].date);
            }
            this.setState({ table: temp })
        });
    }

    //日期补零 2020-01-01
    getZero = (num) => {
        if (parseInt(num) < 10) {
            num = '0' + num;
        }
        return num;
    }

    //转换时间戳
    formatTime = (time) => {
        var date = new Date(time); // 初始化日期
        var year = date.getFullYear(); //获取年份
        var month = date.getMonth() + 1; // 获取月份
        var day = date.getDate(); // 获取具体日
        var hour = date.getHours(); // 获取时
        var minutes = date.getMinutes(); // 获取分
        var seconds = date.getSeconds(); // 获取秒
        return year + '-' + this.getZero(month) + '-' + this.getZero(day) + ' ' + this.getZero(hour) + ':' + this.getZero(minutes) + ':' + this.getZero(seconds)
    }

    click3 = (who, where) => {
        this.setState({ choose: who, how: '1', page: 1 });
        var request = {
            "frequency": where,
            "ht_pt": "Both",
            "clientSide": "Both",
            "currentPage": 1,
            "pageSize": 5,
            "dateSort": 0,
            "clientNameSort": 0,
            "tickerSort": 0,
            "ricSort": 0,
            "sizeSort": 0,
            "priceSort": 0,
            "notionalUsdSort": 0,
            "currencySort": 0,
            "issuerSectorSort": 0,
            "salesPersonSort": 0
        }
        if (who === 'clientSide') {
            request[who] = "Buy"
        } else {
            request[who] = "HT"
        }
        fetch('/stock-service/stock-service/trade/queryTradeRecord/', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            var temp = res.data.tradeRecordList;
            for (var i = 0; i < temp.length; i++) {
                temp[i].date = this.formatTime(temp[i].date);
            }
            this.setState({ table: temp, all: res.data.total })
            var req = {
                "frequency": where,
                "ht_pt": "Both",
                "clientSide": "Both",
            }
            if (who === 'clientSide') {
                req[who] = "Buy"
            } else {
                req[who] = "HT"
            }
            fetch('/stock-service/stock-service/trade/statisticRecord', {
                method: 'post',
                body: JSON.stringify(req),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => {
                return resp.json()
            }).then((resp) => {
                var data = ({
                    totalBuy: resp.data.totalBuy,
                    totalSell: resp.data.totalSell,
                    netQuantity: resp.data.quantity,
                    totalBuyNotional: resp.data.totalBuyNotional,
                    totalSellNotional: resp.data.totalSellNotional,
                    netNotional: resp.data.quantityNotional,
                });
                this.setState({ data: data })
            }).catch(() => {
                alert("请求错误，请稍后再试！")
            })
        });
    }

    click4 = (who, where) => {
        this.setState({ choose: who, how: '2', page: 1 });
        var request = {
            "frequency": where,
            "ht_pt": "Both",
            "clientSide": "Both",
            "currentPage": 1,
            "pageSize": 5,
            "dateSort": 0,
            "clientNameSort": 0,
            "tickerSort": 0,
            "ricSort": 0,
            "sizeSort": 0,
            "priceSort": 0,
            "notionalUsdSort": 0,
            "currencySort": 0,
            "issuerSectorSort": 0,
            "salesPersonSort": 0
        }
        if (who === 'clientSide') {
            request[who] = "Sell"
        } else {
            request[who] = "PT"
        }
        fetch('/stock-service/stock-service/trade/queryTradeRecord/', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            var temp = res.data.tradeRecordList;
            for (var i = 0; i < temp.length; i++) {
                temp[i].date = this.formatTime(temp[i].date);
            }
            this.setState({ table: temp, all: res.data.total })
            var req = {
                "frequency": where,
                "ht_pt": "Both",
                "clientSide": "Both",
            }
            if (who === 'clientSide') {
                req[who] = "Sell"
            } else {
                req[who] = "PT"
            }
            fetch('/stock-service/stock-service/trade/statisticRecord', {
                method: 'post',
                body: JSON.stringify(req),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => {
                return resp.json()
            }).then((resp) => {
                var data = ({
                    totalBuy: resp.data.totalBuy,
                    totalSell: resp.data.totalSell,
                    netQuantity: resp.data.quantity,
                    totalBuyNotional: resp.data.totalBuyNotional,
                    totalSellNotional: resp.data.totalSellNotional,
                    netNotional: resp.data.quantityNotional,
                });
                this.setState({ data: data })
            }).catch(() => {
                alert("请求错误，请稍后再试！")
            })
        }).catch(() => {
            alert("请求错误，请稍后再试！")
        })
    }

    //排序过滤（1，buy,ht）
    click1 = (who, where) => {
        this.setState({ choose: who, how: '1', page: 1 });
        var request = {
            "frequency": where,
            "ht_pt": "Both",
            "clientSide": "Both",
            "currentPage": 1,
            "pageSize": 5,
            "dateSort": 0,
            "clientNameSort": 0,
            "tickerSort": 0,
            "ricSort": 0,
            "sizeSort": 0,
            "priceSort": 0,
            "notionalUsdSort": 0,
            "currencySort": 0,
            "issuerSectorSort": 0,
            "salesPersonSort": 0
        }
        if (who === 'clientSide') {
            request[who] = "Buy"
        } else if (who === 'ht_pt') {
            request[who] = "HT"
        } else {
            request[who] = 1;
        }

        fetch('/stock-service/stock-service/trade/queryTradeRecord/', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            var temp = res.data.tradeRecordList;
            for (var i = 0; i < temp.length; i++) {
                temp[i].date = this.formatTime(temp[i].date);
            }
            this.setState({ table: temp })
        }).catch(() => {
            alert("请求错误，请稍后再试！")
        })
    }

    //排序过滤（2，sell,pt）
    click2 = (who, where) => {
        this.setState({ choose: who, how: '2', page: 1 });
        var request = {
            "frequency": where,
            "ht_pt": "Both",
            "clientSide": "Both",
            "currentPage": 1,
            "pageSize": 5,
            "dateSort": 0,
            "clientNameSort": 0,
            "tickerSort": 0,
            "ricSort": 0,
            "sizeSort": 0,
            "priceSort": 0,
            "notionalUsdSort": 0,
            "currencySort": 0,
            "issuerSectorSort": 0,
            "salesPersonSort": 0
        }
        if (who === 'clientSide') {
            request[who] = "Sell"
        } else if (who === 'ht_pt') {
            request[who] = "PT"
        } else {
            request[who] = 2;
        }
        fetch('/stock-service/stock-service/trade/queryTradeRecord/', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            var temp = res.data.tradeRecordList;
            for (var i = 0; i < temp.length; i++) {
                temp[i].date = this.formatTime(temp[i].date);
            }
            this.setState({ table: temp })
        }).catch(() => {
            alert("请求错误，请稍后再试！")
        })
    }
}
