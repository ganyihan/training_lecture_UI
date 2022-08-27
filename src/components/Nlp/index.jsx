import React, { Component } from 'react'
import { Input, Button } from 'antd';
// import 'antd/dist/antd.css'

export default class Nlp extends Component {
    render() {
        return (
            <div id="nlp-type" style={{ display: 'none', marginLeft: '35px', marginTop: '10px' }}>
                <Input placeholder="Basic usage" allowClear style={{'width': '300px'}}/>
                <Button type="primary">Primary Button</Button>
            </div>
        )
    }
}
