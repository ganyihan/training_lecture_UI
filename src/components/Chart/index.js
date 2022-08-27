import Highcharts from 'highcharts'

export default function show() {
    var categories = ['01/01/2018', '01/02/2018', '01/03/2018', '01/04/2018', '01/05/2018', '01/06/2018',
        '01/07/2018', '01/08/2018', '01/09/2018', '01/10/2018', '01/11/2018', '01/12/2018',
        '01/13/2018', '01/14/2018', '01/15/2018', '01/16/2018'];
    var data1 = [-1746181, -1084488, -2089758, -2222362, -2537431, -1746181, -1884428, -2089758, -2222362, -2537431,
    -1746181, -1884428, -2089758, -2222362, -2537431, -1746181];
    var data2 = [1656154, 1787564, 2981671, 2108575, 2403438, 1656154, 1787564, 1981671, 108575, 2403438,
        1656154, 1787564, 1981671, 2108575, 2403438, 1656154,];
    var data3 = [];
    for (let i = 0; i < data1.length; i++) {
        data3.push(data1[i] + data2[i]);
    }
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
                lineWidth: 0,
                title: {
                    text: 'Sell'
                },
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                tickInterval: 3,
                tickWidth: 0,
                borderColor: "",//去边框
                gridLineColor: '#3f5972',
                gridLineWidth: 1,
            }],
        yAxis: {
            gridLineColor: '#3f5972',
            gridLineWidth: 1,
            title: {
                text: null,
            },
            labels: {
                // formatter: function () {
                //     return (Math.abs(this.value) / 1000000) + 'M';
                // }

            },
            tickInterval: 1000000,
            min: -4000000,
            max: 4000000
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
                return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                    '人口: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },
        series: [{
            type:'column',
            color: "#00B0B9",
            data: data1,
        }, {
            type:'column',
            color: "#00B0B9",
            data: data2,
        }, {
            data: data3,
            type: 'spline',
            color: '#9E630E',
        }],
        legend: { enabled: false }
    });

}