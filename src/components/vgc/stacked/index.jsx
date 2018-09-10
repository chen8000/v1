
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
            // 坐标name
            xNum : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // 显示数据
            data : [120, 200, 150, 80, 70, 110],

            // 选择部门
            select : [
                {
                    name:'部门1',
                    id:0
                },
                {
                    name:'部门2',
                    id:1
                },
                {
                    name:'部门3',
                    id:2
                },
                {
                    name:'部门4',
                    id:3
                },
                {
                    name:'部门5',
                    id:4
                },
                {
                    name:'部门6',
                    id:5
                }
            ]
        }

        // 获取数据
        this.getData()
    }

    // 修改数据后渲染
    componentDidUpdate(){
        renderCharts(this.echarts, this.state)
    }

    getData = () => {
        fetch('/json/stacked.json')
        .then(res => res.json())
        .then(res => {
            this.setState(res)
        })
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


