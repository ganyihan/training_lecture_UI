//最下面的highcharts图

const formatTime = dateString => {
    // 统一时间格式
    const date = new Date(dateString.replace(/-/g, '/'));
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${[day, month, year].map(formatNumber).join('/')}`
  }
  
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  }


let dateList = [
    "2022-06-01",
    "2022-06-02",
    "2022-06-03",
    "2022-06-04",
    "2022-06-05",
    "2022-06-06",
    "2022-06-07",
    "2022-06-08",
    "2022-06-09",
    "2022-06-10",
    "2022-06-11",
    "2022-06-12",
  ];//日期数据

  let dateSeries = (() => {
    dateList.forEach((item, index) => {
      dateList[index] = formatTime(item);
    });
    return dateList;
  })();

let buySeries = [
  59.9, 71.5, 106.4, 159.2, 144.0, 176.0, 115.6, 148.5, 276.4, 194.1, 195.6,
  24.4,
];
let sellSeries = [
  -49.9, -71.5, -126.4, -129.2, -144.0, -156.0, -135.6, -198.5, -216.4, -194.1,
  -95.6, -54.4,
];

// 获取数据
let cumulationSeries = (() => {
  let newArray = Array.from(buySeries);
  for (let i = 0; i < buySeries.length; i++) {
    newArray[i] += sellSeries[i];
  }
  return newArray;
})();

//highcharts设置
Highcharts.chart("container", {
  chart: {
    //zoomType ： 缩放类型
    //值可以是 “x”、“y”、“xy”，分别表示水平缩放、竖直缩放、平面缩放
    zoomType: "xy",
    backgroundColor: "#17202a",
  },
  title: {
    text: "买入与卖出图",
    align: "center",
    style: {
      fontWeight: "bold",
      color: "#ffffff",
    },
  },
  xAxis: [
    {
      lineWidth: 1,
      lineColor: "#243343",
      gridLineWidth: 1,//网格线宽度
      gridLineColor: "#243343",
      labels: {
        align: "center",
        step: 4,//Labels显示间隔
        style: {
          color: "#97afc6",
        },
      },
      title: {
        enabled: false,
      },
      tickmarkPlacement: "on",//刻度线对齐方式
      categories: dateSeries,
    },
  ],
  yAxis: [
    {
      lineWidth: 1,
      lineColor: "#243343",
      gridLineWidth: 1,
      gridLineColor: "#243343",
      // Primary yAxis
      labels: {
        format: "{value}$",
        style: {
          color: "#97afc6",
        },
      },
      title: {
        enabled: false,
      },
    },
    {
      // 显示在下侧的镜像 yAxis （通过 linkedTo 与第一个 yAxis 关联）
      lineWidth: 1,
      lineColor: "#243343",
      gridLineWidth: 1,
      gridLineColor: "#243343",
      opposite: true,
      reversed: false,
      linkedTo: 0,
      labels: {
        enabled: false,
      },
      title: {
        enabled: false,
      },
    },
    {
      lineWidth: 0,
      lineColor: "#243343",
      gridLineWidth: 0,
      gridLineColor: "#243343",
      labels: {
        enabled: false,
      },
      title: {
        enabled: false,
      },
    },
  ],

  // 绘图参数
  plotOptions: {
    series: {
      borderWidth: "0",
      stacking: "normal",
    },
  },
  // 数据提示框
  tooltip: {
    shared: true,
    backgroundColor: "#ffffff",
  },
  // 浮窗
  legend: {
    layout: "vertical",
    align: "right",
    x: -60,
    verticalAlign: "top",
    y: 60,
    floating: true,
    backgroundColor: "#FFFFFF",
  },
  series: [//数据列
    {
      name: "Buy",
      color: "#00b0b9",
      type: "column",
      data: buySeries,
    },
    {
      name: "Sell",
      type: "column",
      color: "#06848d",
      data: sellSeries,
    },
    {
      name: "Cumulative Net",
      type: "line",
      color: "#ed8b00",
      lineWidth: 1,
      data: cumulationSeries,
    },
  ],
});
