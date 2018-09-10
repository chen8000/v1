
import React, { Component } from 'react'
import style from './index.scss'
import { renderCharts } from './renderCharts'
import Select from '../select'

class Stacked extends Component {

    constructor(props){
        super(props)

        this.state = {
            // 坐标name
            xNum : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // 显示数据
            data : [120, 200, 150, 80, 70, 110],

            // 选择部门
            select : ['部门1','部门2','部门3','部门4','部门5']
        }
    }

    // 初始化渲染
    componentDidMount(){
        renderCharts(this.echarts, this.state)
    }

    // 修改数据后渲染
    componentDidUpdate(){
        renderCharts(this.echarts, this.state)
    }

    getVal = val => {
        console.log(val)
    }

    render(){
        let { select } = this.state
        return (
            <div className={style.stacked}>
                <div className={style.title}>
                    <h2>STACKED CHART</h2>
                    <Select select={ select } getVal={ this.getVal }/>
                </div>
                <div ref={d => this.echarts = d} className={style.echarts}></div>
            </div>
        )
    }
}

export default Stacked


