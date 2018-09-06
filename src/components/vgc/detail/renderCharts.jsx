

import echarts from 'echarts'

export const renderCharts = (obj, { xNum, AudiData, VCICData }) => {

    let Charts = echarts.init(obj)
        Charts.setOption({
            title: {
                text: 'Lorem, ipsum ipsum',
                textStyle:{
                    color:'#1b4663'
                }
            },
            legend: {
                data:['VCIC','Audi'],
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
                boundaryGap: true,
                data: xNum,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: 1,
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgb(121, 121, 121)',
                        fontSize:'14'
                    },
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgb(121, 121, 121)',
                        fontSize:'14'
                    },
                },    
                splitLine:{
                    lineStyle:{
                        color:['#dfdfdf'] 
                    }
                }   
            },
            series: [
                {
                    symbolSize: 10,
                    name:'Audi',
                    data: AudiData,
                    type: 'line',
                    itemStyle:{
                        color:'#ac2635',
                        borderWidth:2
                    }
                },
                {
                    symbolSize: 10,
                    name:'VCIC',
                    data: VCICData,
                    type: 'line',
                    itemStyle:{
                        color:'#1b4663',
                        borderWidth:2
                    }
                }
            ]
        })

}



