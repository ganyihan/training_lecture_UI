import React from "react";
import '../../css/demo.css'

export default function FreItm(props) {
    return <span className={props.active? 'fre-item active':'fre-item'} data-value={props.value} label={props.label}>{props.label}</span>
}