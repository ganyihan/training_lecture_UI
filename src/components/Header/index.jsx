import React, { Component } from 'react'
import './index.css'
import {connect} from 'react-redux'
class Header extends Component {
    state={
        tradition:true,
    }

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
        console.log("Header",this.props);
        
        let {tradition} = this.state.tradition;
        this.props.sendAction()
        if(!tradition){
            
            this.setState({
                tradition: !tradition
            });

        }
        //获得state 根据state设置样式
        this.block1.classList.add('active');
        this.block2.classList.remove('active');
        // document.getElementById('nlp-type').style.display = 'none';
        // document.getElementById('trade-type').style.display = 'block';
    };
    choose_nlp = () => {
        console.log("Header",this.props);
        
        let {tradition} = this.state.tradition;
        this.props.sendAction2()
        if(tradition){
            
            this.setState({
                tradition: !tradition
            });

        }
    
        
        this.block2.classList.add('active');
        this.block1.classList.remove('active');
        // document.getElementById('trade-type').style.display = 'none';
        // document.getElementById('nlp-type').style.display = 'block';
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'trade_action'
            })
        },
        sendAction2: () => {
            dispatch({
                type: 'nlp_action'
            })
        }
    }
};
export default connect(null,mapDispatchToProps)(Header);
