
import React, { Component } from 'react'
import style from './index.scss'
import { renderCharts } from './renderCharts'
import Select from '../select'
import 'fetch-detector'
import 'fetch-ie8'

class Stacked extends Component {

    constructor(props){
        super(props)

        this.state = {
            // 选择部门
            select : [
                {name:'部门1',id:0},
                {name:'部门2',id:1},
                {name:'部门3',id:2},
                {name:'部门4',id:3},
                {name:'部门5',id:4},
                {name:'部门6',id:5}
            ],
            selected:{name:'部门1',id:0}
        }

    }

    // 修改数据后渲染
    componentDidUpdate(){
        // 获取数据
        this.getData()
    }

    // 根据年月日获取对应数据
    getData = () => {
        // xNum 坐标
        // date 日期（年月日）
        // lineSelected 线图选中 （月 日）
        let { xNum, date } = this.props.res
        let lineSelected = this.props.res.selected
        // 柱形图选中
        let { selected } = this.state

        // 部门，年月日， 月日
        console.log({date, lineSelected, selected})

        fetch('/json/stacked.json')
        .then(res => res.json())
        .then(res => {
            let { data } = res
            renderCharts(this.echarts, xNum, data)  
        })
    }

    // 部门
    getVal = val => {

        // 选中部门的selected
        this.setState({ selected:val })
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


