import React, { useState } from "react";
import "../../css/demo.css";
import FreItm from "./fre-item";
const ITEMS = [
  { value: "1D", label: "1D", active: true },
  { value: "1W", label: "1W", active: false },
  { value: "2W", label: "2W", active: false },
  { value: "1M", label: "1M", active: false },
  { value: "3M", label: "3M", active: false },
  { value: "6M", label: "6M", active: false },
  { value: "1Y", label: "1Y", active: false },
  { value: "YTD", label: "YTD", active: false },
];

export default function FreGroup(props) {
  const { selectFreItm } = props;
  const [list, setList] = useState(ITEMS);
  function clickHandler(evt) {
   
    const target = evt.target;
    console.log(evt);
    console.log(target);
    if (target.classList.contains("fre-group")) return;
    const selectVal = target.dataset.value;
    ITEMS.forEach((item) => {
      item.active = false;
      if (item.value === selectVal) {
        item.active = true;
      }
    });
    setList(JSON.parse(JSON.stringify(ITEMS)));
    if (selectFreItm) {
      props.selectFreItm(selectVal);
    }
  }

  return (
    <div class="fre-group" onClick={clickHandler}>
      {list.map((item) => (
        <FreItm key={item.value} {...item}></FreItm>
      ))}
    </div>
  );
}
