

import echarts from 'echarts'

export const renderCharts = (obj, { xNum, data }) => {

    let Charts = echarts.init(obj)
        Charts.setOption({
            legend: {
                data:['VCIC PR'],
                icon: 'circle',
                right:'3%'
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '0%',
                containLabel: true,
                borderWidth:0
            },
            xAxis: {
                type: 'category',
                data: xNum,
                axisTick: {
                    show: false,
                    alignWithLabel: 1,
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                    alignWithLabel: 1,
                },
                axisLine: {
                    show: false
                },    
                splitLine:{
                    lineStyle:{
                        color:['#dfdfdf'] 
                    }
                }   
            },
            series: [{
                name:'VCIC PR',
                data: data,
                type: 'bar',
                itemStyle:{
                    color:'#1b4663' 
                }
            }]
        })
}







