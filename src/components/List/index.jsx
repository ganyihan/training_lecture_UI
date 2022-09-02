import React, { Component } from 'react'
import './index.css'
import show from '../Chart/index'
import Tab from './Tab'
import PubSub from "pubsub-js"



export default class List extends Component {
    render() {
        return (
            <div>
                <div className="pall">
                    <div id='1D' className="p1 p_active" onClick={(e) => this.change('1D')}>1D</div>
                    <div id='1W' className="p1" onClick={(e) => this.change('1W')}>1W</div>
                    <div id='2W' className="p1" onClick={(e) => this.change('2W')}>2W</div>
                    <div id='1M' className="p1" onClick={(e) => this.change('1M')}>1M</div>
                    <div id='3M' className="p1" onClick={(e) => this.change('3M')}>3M</div>
                    <div id='6M' className="p1" onClick={(e) => this.change('6M')}>6M&nbsp;</div>
                    <div id='1Y' className="p1" onClick={(e) => this.change('1Y')}>1Y&nbsp;</div>
                    <div id='YTD' className="p2" onClick={(e) => this.change('YTD')}>YTD</div>
                </div>
                <Tab data={this.state} click={this.changeTable}></Tab>
            </div>
        )
    }
    // choose = '1D';
    state = { table: [], total: {}, choose: '1D', page: 1 };

    getZero = (num) => {
        if (parseInt(num) < 10) {
            num = '0' + num;
        }
        return num;
    }

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

    componentDidMount() {
        this.change("1D");
    }

    change = (who) => {
        PubSub.publish('page', 1)
        var request = {
            "frequency": who,
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
            this.setState({
                page: 1,
            });
            PubSub.publish('total', res.data.total)
            for (var i = 0; i < temp.length; i++) {
                temp[i].date = this.formatTime(temp[i].date);
            }
            console.log("----------------------------")
            console.log(temp)
            PubSub.publish('table', temp)
            document.getElementById(this.state.choose).classList.remove('p_active')
            document.getElementById(who).classList.add('p_active');
            this.setState({ choose: who })
            show(who);

            var req = {
                clientSide: "Both",
                frequency: who,
                ht_pt: "Both"
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
                console.log("看着")
                console.log(resp)
                var data = ({
                    totalBuy: resp.data.totalBuy,
                    totalSell: resp.data.totalSell,
                    netQuantity: resp.data.quantity,
                    totalBuyNotional: resp.data.totalBuyNotional,
                    totalSellNotional: resp.data.totalSellNotional,
                    netNotional: resp.data.quantityNotional,
                });
                PubSub.publish('data', data)
                
            });
        });
    }

    changeTable = (data) => {
        this.setState({ table: data });
    }
}
