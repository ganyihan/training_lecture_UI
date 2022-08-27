import React, { Component } from 'react'
import './index.css'
import show from '../Chart/index'
import Tab from './Tab'

export default class List extends Component {
    render() {
        return (
            <div>
                <div className="pall">
                    <div id='one' className="p1 p_active" onClick={this.change1}>1W</div>
                    <div id='two' className="p1" onClick={this.change2}>2W</div>
                    <div id='three' className="p1" onClick={this.change3}>3W</div>
                    <div id='four' className="p1" onClick={this.change4}>1M</div>
                    <div id='five' className="p1" onClick={this.change5}>2M</div>
                    <div id='six' className="p1" onClick={this.change6}>1Y&nbsp;</div>
                    <div id='seven' className="p2" onClick={this.change7}>YTD</div>
                </div>
                <Tab data={this.state}></Tab>
            </div>
        )
    }
    choose = 'one';
    state = {table:[],total:{}};
    
    change1 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day2"]});
            console.log(this.state.table)
            this.setState({total:{'name':'1000.0'}});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('one').classList.add('p_active');
            this.choose = 'one';
            show();
        });


    }

    change2 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day2"]});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('two').classList.add('p_active');
            this.choose = 'two';
        })

    }

    change3 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day2"]});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('three').classList.add('p_active');
            this.choose = 'three';
        })
    }

    change4 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day2"]});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('four').classList.add('p_active');
            this.choose = 'four';
        })
    }

    change5 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day1"]});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('five').classList.add('p_active');
            this.choose = 'five';
        })
    }

    change6 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day2"]});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('six').classList.add('p_active');
            this.choose = 'six';
        })
    }

    change7 = () => {
        fetch('./data1.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({table:data["day3"]});
            document.getElementById(this.choose).classList.remove('p_active')
            document.getElementById('seven').classList.add('p_active');
            this.choose = 'seven';
        })
    }

   

}
