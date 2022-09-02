import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

export default class Nlp extends Component {
    render() {
        return (
            <div id="nlp-type" style={{ display: 'block', marginLeft: '35px', marginTop: '10px' }}>
                <input placeholder="text input" ref={(c) => { this.nlp = c }} style={{ width: '300px', height: '24px' }} />
                <button style={{
                    color: 'black',
                    backgroundColor: '#dbdcdd',
                    width: '60px',
                    borderRadius: '5px',
                    marginLeft: '10px'
                }} className="btn1" onClick={this.nlp}>submit</button>
            </div >
        )
    }

    nlp = () => {

        if (this.nlp.value === '') {
            alert("Input cannot be empty")
            return false;
        }
        var request = {
            text: this.nlp.value
        }
        console.log(JSON.stringify(request))
        fetch('http://127.0.0.1:8081/submit', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)

            if (res.NAME === undefined) {
                this.trade(res.action, "saler1", res.Size, res.TICKER)
            } else {
                this.trade(res.action, res.NAME, res.Size, res.TICKER)
            }
        }).catch(() => {
            alert("请求错误，请稍后再试！")
        })
    }

    trade = (action, name, size, ticket) => {


        var request = {
            "clientName": "user1",
            "clientSide": action,
            "ht_pt": 'PT',
            "ric": ticket,
            "salesperson": name,
            "size": parseInt(size),
            "ticker": ticket
        }

        console.log(request)
        fetch('/stock-service/stock-service/trade/makeNlpTrade', {
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
}


