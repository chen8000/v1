
import React, { Component } from 'react'
import style from './index.scss'
import { renderCharts } from './renderCharts'

class Detail extends Component {

    constructor(props){
        super(props)

        this.state = {
            // 坐标
            xNum:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            // 奥迪数据
            AudiData:[15, 93, 30, 93, 100, 133, 132,30, 93, 30, 93, 100, 133, 132,30, 93, 30, 93, 100, 133, 132,30, 93, 30, 93, 100, 133],
            // 大众数据
            VCICData:[10, 30, 80, 60, 90, 50, 16,10, 30, 80, 60, 90, 50, 16,10, 30, 80, 60, 90, 50, 60, 90, 50, 16,10, 30, 80, 60, 90, 50]
        }
    }

    componentDidMount(){

        // 渲染图标数据
        renderCharts(this.charts, this.state)
    }

    render(){
        return (
            <div>
                <div>
                    <h2>Lorem, ipsum ipsum</h2>
                    <div>
                        <span className={ style.left }></span>
                    </div>
                </div>

                {/* 放图表 */}
                <div ref={ c => this.charts = c } className={ style.charts }></div>
            </div>
        )
    }
}

export default Detail



