
import React, { Component } from 'react'
import style from './index.scss'

class Select extends Component {

    constructor(props){
        super(props)

        let { select } = this.props

        this.state = {
            select:{
                renderType:false,
                option:select,
                val:select[0]
            }
        }
    }

    selectFn = () => {
        let { select } = this.state

        select.renderType = !this.state.select.renderType

        this.setState({ select })
    }

    getVal = index => {
        // 关闭弹出框
        this.selectFn()
        
        let { select } = this.state

        select.val = select.option[index]

        // 调用父组件，传给父组件选中的值
        this.props.getVal(select.option[index])
    }

    render(){
        let { select } = this.state
        return (
            <div className={ style.select }>
                <span className={ style.val } onClick={ this.selectFn }>{select.val.name}</span>
                <ul className={ select.renderType ? style.selectAni : null }>
                    {
                        select.option.map((res, i) => 
                            <li onClick={ () => this.getVal(i) } key={ i }>{ res.name }</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Select


