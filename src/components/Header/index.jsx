import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="one">
                <div style={{ backgroundColor: 'rgb(59,84,108,0.6)', width: '280px', height: '30px', borderRadius: '5px' }}>
                    <div className="c1 active" id="trade" onClick={this.choose_trade} ref={(t)=>{this.block1 = t}}>
                        Traditional Trade
                    </div>
                    <div className="c2" id="nlp" onClick={this.choose_nlp} ref={(c)=>{this.block2 = c}}>
                        NLP Trade
                    </div>
                </div>
            </div>
        )
    }
    choose_trade = () => {
        this.block1.classList.add('active');
        this.block2.classList.remove('active');
        document.getElementById('nlp-type').style.display = 'none';
        document.getElementById('trade-type').style.display = 'block';
    }
    choose_nlp = () => {
        this.block2.classList.add('active');
        this.block1.classList.remove('active');
        document.getElementById('trade-type').style.display = 'none';
        document.getElementById('nlp-type').style.display = 'block';
    }

}
