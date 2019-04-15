// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('product'));

// 指定图表的配置项和数据

setTimeout(function () {

option = {

tooltip: {
    trigger: 'axis',
    showContent: false
},
dataset: {
    source: [
        ['product','2010','2011','2012', '2013', '2014', '2015', '2016', '2017'],
        ['电子与信息', 2026.2,1766.4,1740.8,1897.1,2111.2,   1919.4, 1853.9, 1864.7],
        ['新能源与高效节能技术',958.2,    1025.9, 1658.4, 1527,   2341.5, 2441.6, 2205.5, 2202.1],
        ['先进制造技术',969.7,    1540.9, 1674.1, 2338,   2491.2, 2747.9, 3177.7, 4030.6],
        ['其他领域', 1033.9, 1498.3,  1421.4,  2128.2,  2134.3,  2452.9,  2700.7,  2698.72159],]
    //     ['生物工程和新医药', 311.2, 411.3,  528.6,  650.3,  732.7,  806.7,  882.8,  1075.6],
    //     ['航空航技术', 50.4, 102.8,  122.1,  179.6,  62.7,   208,    274.7,  250.1],
    // ['现代农业技术动植物优良新品种',65.1, 84.9,   75, 117.8,  127.7,  123.3,  120.2,  128.3],
    // ['环境保护技术',38.3, 231.6,  106.3,  287.6,  322,    325.2,  266.9,  337.3],
    // ['新材料及应用技术',283.4, 350, 364.2,  676.8,  641.5,  686,    675.1,  753.8],
    // ['海洋工程技术',20.7, 21, 35.2,   30.7,   24.7,   24.9,   18.8,   22.6],
    // ['核应用技术',22.1,  26.4,   28.5,   8.7,    8.8,    7.4,    8.1,    10.1],
    // ['其他',242.7,    270.3,  161.5,  176.7,  214.2,  271.4,  454.1,  121.0],]
},
xAxis: {type: 'category'},
yAxis: {gridIndex: 0},
grid: {top: '55%'},
series: [
    {type: 'line', smooth: true, seriesLayoutBy: 'row',
    itemStyle:{
      normal:{
        color:"#070d59"
      }
    }
  },
    {type: 'line', smooth: true, seriesLayoutBy: 'row',
    itemStyle:{
      normal:{
        color:"#707fb9"
      }
    }
},
    {type: 'line', smooth: true, seriesLayoutBy: 'row',
itemStyle:{
      normal:{
        color:"#5893d4"
      }
    }},
    {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                              '#070d59','#707fb9','#5893d4','#555555'
                            ];
                            return colorList[params.dataIndex]
                        },
        
                    }
                },
        label: {
            formatter: '{b}:{d}%'
        },
        encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
        }
    }
]
};

myChart.on('updateAxisPointer', function (event) {
var xAxisInfo = event.axesInfo[0];
if (xAxisInfo) {
    var dimension = xAxisInfo.value + 1;
    myChart.setOption({
        series: {
            id: 'pie',
            label: {
                formatter: '{b}:{d}%'
            },
            encode: {
                value: dimension,
                tooltip: dimension
            }
        }
    });
}
});

myChart.setOption(option);

});
