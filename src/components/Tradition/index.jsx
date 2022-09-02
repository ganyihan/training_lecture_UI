import React, { Component } from 'react'
import './index.css'

export default class Tradition extends Component {

    render() {
        return (
            <div id="trade-type" style={{ display: 'block' }}>
                <div style={{ marginLeft: '35px', marginTop: '10px' }}>

                    <div className="block">Client Name<input placeholder="text input" ref={(c) => { this.clientName = c }} /></div>
                    <div className="block">Ticker<input placeholder="text input" ref={(c) => { this.ticker = c }} /></div>
                    <div className="block">RIC <input placeholder="text input" ref={(c) => { this.ric = c }} /></div>
                    <div className="block">Size<input placeholder="text input" ref={(c) => { this.size = c }} /></div>
                    <div className="block">Price<input placeholder="text input" ref={(c) => { this.price = c }} /></div>
                    <div className="block">Currency<input placeholder="text input" ref={(c) => { this.currency = c }} /></div>
                    <div className="block">Issuer Sector<input placeholder="text input" ref={(c) => { this.issueSector = c }} /></div>
                    <div className="block">Salesperson<input placeholder="text input" ref={(c) => { this.salesperson = c }} /></div>
                    <div className="block">
                        HT/PT
                        <select className="select" ref={(c) => { this.htPt = c }}>
                            <option value="ht">HT</option>
                            <option value="pt">PT</option>
                        </select>
                    </div>
                    <button
                        className='btn1'
                        style={{
                            color: 'black',
                            backgroundColor: '#00b755',
                            width: '60px',
                            borderRadius: '5px'
                        }} onClick={this.fun1}>Buy</button>
                    <button
                        className='btn2'
                        style={{
                            color: 'black',
                            backgroundColor: '#ffcd00',
                            width: '60px',
                            borderRadius: '5px'
                        }} onClick={this.fun2}>Sell</button>
                </div>
            </div>
        )
    }


    fun1 = () => {
        if (this.clientName.value === '' || this.currency.valu === '' || this.htPt.value === '' || this.issueSector.value === ''
            || this.price.value === '' || this.ric.value === '' || this.salesperson.value === '' || this.size.value === '' ||
            this.ticker.value === '') {
            alert("Input cannot be empty")
            return false;
        }

        var request = {
            "clientName": this.clientName.value,
            "clientSide": 'Buy',
            "currency": this.currency.value,
            "ht_pt": this.htPt.value,
            "issueSector": this.issueSector.value,
            "price": this.price.value,
            "ric": this.ric.value,
            "salesperson": this.salesperson.value,
            "size": this.size.value,
            "ticker": this.ticker.value
        }

        fetch('/stock-service/stock-service/trade/makeTrade', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res)
            return res.json()
        }).then((res) => {
            if (res.code === 200) {
                window.location.reload();
                alert("成功")
            } else {
                console.log(res.msg)
                alert(res.msg)
            }
        }).catch(() => {
            alert("请求错误，请稍后再试！")
        })
    }

    fun2 = () => {
        var request = {
            "clientName": this.clientName.value,
            "clientSide": 'Sell',
            "currency": this.currency.value,
            "ht_pt": this.htPt.value,
            "issueSector": this.issueSector.value,
            "price": this.price.value,
            "ric": this.ric.value,
            "salesperson": this.salesperson.value,
            "size": this.size.value,
            "ticker": this.ticker.value
        }

        fetch('/stock-service/stock-service/trade/makeTrade', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            console.log(res.code)
            if (res.code === 200) {
                window.location.reload();
                alert("成功")
            } else {
                console.log(res.msg)
                alert(res.msg)
            }
        }).catch(() => {
            alert("请求错误，请稍后再试！")
        })
    }
}

