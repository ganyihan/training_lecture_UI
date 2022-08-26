import stockdata from "./getData.js";

// 最上面的traditional Trade和NLP Trade

//nlp trade
let nlpWords = "";
//该事件在表单元素的内容改变时触发
document.getElementsByClassName("action-input-nlp")[0].addEventListener(
  "change",
  (event) => {
    nlpWords = event.currentTarget.value;
  },
  false
);


//tra trade
const tabs = document.getElementsByClassName("tabs-wrapper")[0];
tabs.addEventListener(
  "click",
  (event) => {
    const type = event.target.dataset.value;
    if (type === "tra") {//选择的是traditional Trade
      document.getElementsByClassName("action-div")[0].style.height = "114px";
      document
        .getElementsByClassName("action0")[0]
        .classList.remove("hidden-class");
      document
        .getElementsByClassName("action1")[0]
        .classList.add("hidden-class");
      document.getElementsByClassName("tab-item")[0].classList.add("active");
      document.getElementsByClassName("tab-item")[1].classList.remove("active");
    } else {//选择的是nlp trade
      document.getElementsByClassName("action-div")[0].style.height = "58px";
      document
        .getElementsByClassName("action0")[0]
        .classList.add("hidden-class");
      document
        .getElementsByClassName("action1")[0]
        .classList.remove("hidden-class");
      document.getElementsByClassName("tab-item")[1].classList.add("active");
      document.getElementsByClassName("tab-item")[0].classList.remove("active");
    }
  },
  false
);

let dealForm = {};
// 为所有输入框绑定该事件
const inputItems = Array.from(document.getElementsByClassName("action-input"));
for (let item of inputItems) {
  item.addEventListener(
    "change",
    (event) => {
      if (
        event.currentTarget.value != "" &&
        !(
          event.currentTarget.name == "type" &&
          event.currentTarget.value == "--select--"
        )
      ) {
        dealForm[`${event.currentTarget.name}`] = event.currentTarget.value;
      }
    },
    false
  );
}


// 购买按钮
document.getElementsByClassName("button-buy")[0].addEventListener(
  "click",
  async (event) => {
      try {
        console.log("dealform为"+dealForm)
        const res = await stockdata.buyStock(dealForm);
        console.log(res)
        if (res.code == 200) {
          dealForm = {};
          alert("购买成功");
        } else {
          alert("购买失败，请重试");
        }
      } catch (error) {
        alert("购买失败");
        console.log(error);
      }
  },
  false
);

//出售按钮
document.getElementsByClassName("button-sell")[0].addEventListener(
  "click",
  async (event) => {
      try {
        const res = await stockdata.sellStock(dealForm);
        if (res.code == 200) {
          dealForm = {};
          alert("出售成功");
        } else {
          alert("出售失败，请重试");
        }
      } catch (error) {
        alert("出售失败");
        console.log(error);
      }
    }
  ,
  false
);


