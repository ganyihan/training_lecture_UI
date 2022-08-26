import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="one">
                <div style={{ backgroundColor: 'rgb(59,84,108,0.6)', width: '280px', height: '30px', borderRadius: '5px' }}>
                    <div className="c1 active" id="trade" onClick={this.choose_trade}>
                        Traditional Trade
                    </div>
                    <div className="c2" id="nlp" onClick={this.choose_nlp}>
                        NLP Trade
                    </div>
                </div>
            </div>
        )
    }
    choose_trade = () => {
        document.getElementById('nlp-type').style.display = 'none';  //可以通过react方式渲染
        document.getElementById('trade-type').style.display = 'block';
        document.getElementById('nlp').classList.remove('active');
        document.getElementById('trade').classList.add('active');
    }
    choose_nlp = () => {
        document.getElementById('trade-type').style.display = 'none';
        document.getElementById('nlp-type').style.display = 'block';
        document.getElementById('nlp').classList.add('active');
        document.getElementById('trade').classList.remove('active');
    }

}
