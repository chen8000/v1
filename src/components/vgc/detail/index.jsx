
import React, { Component } from 'react'
import style from './index.scss'
import { renderCharts } from './renderCharts'

import Select from '../select'

class Detail extends Component {

    constructor(props){
        super(props)

        this.state = {
            // 坐标
            xNum:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            // 奥迪数据
            AudiData:[15, 93, 30, 93, 100, 133, 132,30, 93, 30, 93, 100, 133, 132,30, 93, 30, 93, 100, 133, 132,30, 93, 30, 93, 100, 133],
            // 大众数据
            VCICData:[10, 30, 80, 60, 90, 50, 16,10, 30, 80, 60, 90, 50, 16,10, 30, 80, 60, 90, 50, 60, 90, 50, 16,10, 30, 80, 60, 90, 50],
            
            select:['月', '日']
        }
    }

    // 初始化渲染
    componentDidMount(){
        // 渲染图标数据
        renderCharts(this.charts, this.state)
    }

    // 修改数据后渲染
    componentDidUpdate(){
        // 渲染图标数据
        renderCharts(this.charts, this.state)
    }

    getVal = val => {
        // 获取select选中的值
        console.log(val)
    }

    render(){
        let { select } = this.state
        return (
            <div>
                <div className={ style.titleBar }>
                    <h2 className={ style.title }>Lorem, ipsum ipsum</h2>
                    <div className={ style.viewDatebox }>
                        <span className={ style.left }></span>
                        <p className={ style.viewDate }>2018-9-6</p>
                        <span className={ style.right }></span>
                    </div>
                    <Select select={ select } getVal={ this.getVal }/>
                </div>

                {/* 放图表 */}
                <div ref={ c => this.charts = c } className={ style.charts }></div>
            </div>
        )
    }
}

export default Detail



