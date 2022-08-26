// 标签栏和表格
import stockdata from "./getData.js";

// 标签栏1D 1W 2W它们的点击事件
const secTabs = document.getElementsByClassName("tabs-wrapper-1")[0];
secTabs.addEventListener("click", (event) => {
  const selected = event.target.dataset.value;
  const items = Array.from(document.getElementsByClassName("tab-item-1"));
  items.forEach((item, index) => {//根据索引找到是哪一个栏目
    item.classList.remove("active");
    if (index == selected) {
      item.classList.add("active");
    }
  });
  getTableData(selected);//选择对应的写死的数据
}, false);

//显示表格数据
const getTableData = async (selected) => {
  try {
    let res = {};
    if (selected % 2 == 0) {
      res = await stockdata.getData();//写死的数据
    } else {
      res = await stockdata.getData1();
    }
    let table = document.getElementsByTagName("table")[0];
    let trChildrenLength = table.children.length;//有多少行
    // 首先需要把原来行都给去掉
    for (let j = 0; j < trChildrenLength - 1; j++) {
      table.removeChild(table.lastChild);
    }
   //换成从json中取出来的每一行数据
    for (let i = 0; i < res.total; i++) {
      let trDom = document.createElement("tr");//创建行元素
      for (let tdItem of Object.values(res.dataList[i])) {
        //把买设置成绿色，卖设置成红色，其它白色显示
        if (tdItem == "Buy") {
          trDom.innerHTML += `<td class="data-green">${tdItem}</td>`;
        } else if (tdItem == "Sell") {
          trDom.innerHTML += `<td class="data-red">${tdItem}</td>`;
        } else {
          trDom.innerHTML += `<td>${tdItem}</td>`;
        }
      }
      table.appendChild(trDom);//将数据加入到table中
    }
    // 最下面的统计数据
    const data_items = document.getElementById("data-items");
    data_items.innerHTML = `
      <span class="data-item"><span class="data-green">Total Buy: </span>${res.totalBuy}</span>
      <span class="data-item"><span class="data-red">Total Sell: </span>${res.totalSell}</span>
      <span class="data-item"><span class="data-blue">Net Quantity: </span>${res.netQuantity}</span>
      <span class="data-item"><span class="data-green">Total Buy National: </span>${res.totalBuyNational}</span>
      <span class="data-item"><span class="data-red">Total Sell National: </span>${res.totalSellNational}</span>
      <span class="data-item"><span class="data-blue">Net National: </span>${res.netNational}</span>
    `;
    document.getElementsByClassName(
      "data-records"
    )[0].innerText = `Records: ${res.total}`;
  } catch (error) {
    alert("获取失败");
    console.log(error);
  }
};



export default getTableData;