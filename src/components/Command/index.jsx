

import React, { Component } from 'react'
import {connect} from 'react-redux'


import Nlp from '../Nlp';
import Tradition from '../Tradition';


class Command extends Component {
  render() {
   
    return (
    
      
      <div style={{
        backgroundColor: '#131a22',
        color: '#dbdcdd'
      }}>
        
        {this.props.tradition ? <Tradition></Tradition>:<Nlp></Nlp>}
        
      </div>
    
    );
  }
}
const mapStateToProps = state => {
    console.log("Command",state);
    return state;
};
export default connect (mapStateToProps)(Command);