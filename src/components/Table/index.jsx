import React, { Component } from 'react'
import './index.css'
import show from '../Chart/index'

export default class List extends Component {
    render() {
        return (
            <div>
                <div className="pall">
                    <div id='one' className="p1 p_active" onClick={this.change1}>1D</div>
                    <div id='two' className="p1" onClick={this.change2}>1W</div>
                    <div id='three' className="p1" onClick={this.change3}>1M</div>
                    <div id='four' className="p1" onClick={this.change4}>3M</div>
                    <div id='five' className="p1" onClick={this.change5}>6M</div>
                    <div id='six' className="p1" onClick={this.change6}>1Y&nbsp;</div>
                    <div id='seven' className="p2" onClick={this.change7}>YTD</div>
                </div>
                <div className="tall">
                    <table className="t" id="stu">
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
                    </table>
                    <div style={{ marginTop: '5px', backgroundColor: '#212f3d' }}>
                        <div style={{ width: '120px', display: 'inline-block', marginLeft: '5px' }}>
                            <span style={{ color: '#00b755' }}>Total Buy:</span>1,300.26
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
            </div>
        )
    }
    choose = 'one'
    change1 = ()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('one').classList.add('p_active');
        this.choose = 'one';
        show();
    }

    change2=()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('two').classList.add('p_active');
        this.choose = 'two';
    }

   change3=()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('three').classList.add('p_active');
        this.choose = 'three';
    }

    change4=()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('four').classList.add('p_active');
        this.choose = 'four';
    }

    change5=()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            }
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('five').classList.add('p_active');
        this.choose = 'five';
    }

    change6=()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            }
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('six').classList.add('p_active');
        this.choose = 'six';
    }

    change7=()=> {
        var data = [
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            },
            {
                'date': 'Date', 'clientName': 'Client Name', 'ticker': 'Ticker',
                'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
                'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
            }
        ];
        this.change(data);
        document.getElementById(this.choose).classList.remove('p_active')
        document.getElementById('seven').classList.add('p_active');
        this.choose = 'seven';
    }

    change=(data)=> {
        var table = document.getElementById('stu');
        var rowCount = table.rows.length;
        for (let i = 1; i < rowCount; i++) {
            table.deleteRow(i);
            rowCount = rowCount - 1;
            i = i - 1;
        }

        for (let i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');//创建tr(表格的行)
            var name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].date;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].clientName;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].clientSide;
            if (data[i].clientSide === 'Buy') {
                name.style.color = 'rgb(8,154,81)'
            } else if (data[i].clientSide === 'Sell') {
                name.style.color = 'rgb(186,95,94)'
            }

            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].ticker;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].ric;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].price;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].size;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].notionalUSD;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].currency;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].issuerSector;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].salesperson;
            name = document.createElement("td");//创建td(表格的列)
            table.appendChild(tr);//向表格里添加行
            tr.appendChild(name);//向表格新建的行添加列
            name.innerText = data[i].type;

        }
    }

}
