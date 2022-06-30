import "./trade.js";
import getTableData from "./form.js";
import "./flow.js";

import "../css/index.css";

// 初始化数据
getTableData(0);

if (module.hot) {
  module.hot.accept();
}
