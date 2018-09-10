
import React, { Component } from 'react'
import style from './index.scss'
import { renderCharts } from './renderCharts'
import 'fetch-detector'
import 'fetch-ie8'
import { getDate, total } from '../module/date'

// 子组件
import Select from '../select'
import Date from '../date'

class Detail extends Component {

    constructor(props){
        super(props)

        this.state = {
            // 坐标 一个月的总数
            xNum:total(getDate().year, getDate().month),  // 根据选中的是日还是月修改坐标
            // 奥迪数据
            AudiData:[],
            // 大众数据
            VCICData:[],
            // select
            select:['月', '日'],
            // 默认选中值
            selected:'月', // 当前选中的是日还是月
            // 当前日期
            date:getDate() // 当前选中的日期
            
        }

        // 获取数据 fetch
        this.getData()
        
    }

    // 获取初始数据
    getData = () => {
        fetch('/json/detail.json')
        .then(res => res.json())
        .then(res => {
            this.setState(res)
        })
    }   
    // 修改数据后渲染
    componentDidUpdate(){
        // 渲染图标数据
        renderCharts(this.charts, this.state)

    }

    getJson = (val) => {
        console.log(val)
    }

    // 获取select的val
    getVal = val => {
        let { selected, date } = this.state

        selected = val

        this.setState({selected:val})

        // 根据选中的是月还是日，修改坐标数值
        if(selected === '月'){
            let xNum = total(date.year, date.month)
            this.setState({ xNum })
        }
        if(selected === '日'){
            let xNum = 24
            this.setState({ xNum })
        }
        this.getJson({selected, date})
    }

    // 修改date
    setDate = date => {
        let {xNum, selected} = this.state

        // 如果是月，根据选中的日期显示每月多少天
        if(selected === '月'){
            xNum = total(date.year, date.month)
            this.setState({ xNum })
        }

        // 修改当前选中的日期
        this.setState({ date })
        this.getJson({selected, date})
    }

    render(){
        let { select, selected, date } = this.state
        
        return (
            <div>
                <div className={ style.titleBar }>
                    <h2 className={ style.title }>Lorem, ipsum ipsum</h2>
                    <Date 
                        selected={ selected } 
                        setDate = {this.setDate} 
                        date={ date }/>
                    <Select select={ select } getVal={ this.getVal }/>
                </div>

                {/* 放图表 */}
                <div ref={ c => this.charts = c } className={ style.charts }></div>
            </div>
        )
    }
}

export default Detail



