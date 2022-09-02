import Highcharts from 'highcharts'
// import highstock from 'highcharts/modules/stock'



export default function show(who) {

    // var categories = ['01/01/2018', '01/02/2018', '01/03/2018', '01/04/2018', '01/05/2018', '01/06/2018',
    //     '01/07/2018', '01/08/2018', '01/09/2018', '01/10/2018', '01/11/2018', '01/12/2018',
    //     '01/13/2018', '01/14/2018', '01/15/2018', '01/16/2018'];
    // var data1 = [-1746181, -1084488, -2089758, -2222362, -2537431, -1746181, -1884428, -2089758, -2222362, -2537431,
    // -1746181, -1884428, -2089758, -2222362, -2537431, -1746181];
    // var data2 = [1656154, 1787564, 2981671, 2108575, 2403438, 1656154, 1787564, 1981671, 108575, 2403438,
    //     1656154, 1787564, 1981671, 2108575, 2403438, 1656154,];
    var data3 = [];
    var data1 = [];
    var data2 = [];
    var categories = [];
    var max = 0;

    fetch('/stock-service/stock-service/trade/chartdata?frequency=' + who, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res.json()
    }).then((res) => {
        for (let i = 0; i < res.length; i++) {
            data1.push(res[i].notional_usd_buy)
            data2.push(-res[i].notional_usd_sell)
            categories.push(res[i].date)
            data3.push(data1[i] + data2[i]);
            max = Math.max(res[i].notional_usd_buy, res[i].notional_usd_sell, max)
        }

        var index = 1000000;
        while (max >= index) {
            index += 1000000;
        }
        max = index;
        const error = new Error(res.statusText);
        error.response = res;
        throw error; //检测到报错会进入到catch中
    }).catch(function (error) {
        console.log(error.response.status + '--' + error.response.statusText);
        console.log('There has been a problem with your fetch operation: ', error.message);
    }).finally(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'column',
                backgroundColor: '#212f3d',
            },
            title: {
                text: ''
            },

            xAxis: [
                {
                    max: 10,// x轴多于30个出现滚动条
                    lineWidth: 0,
                    // title: {
                    //     text: 'Sell'
                    // },
                    opposite: true, //上下翻转
                    reversed: false, //左右翻转
                    tickInterval: 3, //坐标轴标签间隔
                    categories: categories,
                    linkedTo: 0,
                    tickWidth: 0,
                    borderColor: "",//去边框
                    gridLineColor: '#3f5972',
                    gridLineWidth: 1,
                }
            ],
            
            yAxis: {
                gridLineColor: '#3f5972',
                gridLineWidth: 1,
                title: {
                    text: null,
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 10000) + 'W';
                    }

                },
                tickInterval: max / 4,
                min: -max,
                max: max
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                },
                column: {
                    borderColor: "",//去边框
                    shadow: false		//去阴影
                }
            },
            tooltip: {
                formatter: function () {
                    if (this.point.y < 0) {
                        return '<b>' + 'date:' + this.point.category + '</b><br/>' +
                            'sell: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                    } else {
                        return '<b>' + 'date:' + this.point.category + '</b><br/>' +
                            'buy: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                    }
                }
            },
            series: [{
                type: 'column',
                color: "#00B0B9",
                data: data1,
            }, {
                type: 'column',
                color: "#007d82",
                data: data2,
            }, {
                data: data3,
                type: 'spline',
                color: '#9E630E',
            }],
            legend: { enabled: false },
            // scrollbar: {// 设置滚动条样式
            //     enabled: true,
            //     height: 2,
            //     barBackgroundColor: "#d1d1d1",
            //     barBorderColor: "#d1d1d1",
            //     rifleColor: "#d1d1d1",
            //     barBorderRadius: 5,
            //     buttonBorderWidth: 0,
            //     buttonArrowColor: "rgba(0,0,0,0)",
            // },
        });
    })



}