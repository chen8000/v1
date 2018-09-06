
import React, { Component } from 'react'
import style from './index.scss'

class OverView extends Component {

    constructor(props){
        super(props)

        this.state = {
            bar:[
                {
                    title:'ipsum dolor sit',
                    num:'24K',
                    des:'+2.1% Lorem, ipsum ipsum'
                },
                {
                    title:'ipsum dolor sit',
                    num:'24K',
                    des:'+2.1% Lorem, ipsum ipsum'
                },
                {
                    title:'ipsum dolor sit',
                    num:'24K',
                    des:'+2.1% Lorem, ipsum ipsum'
                },
                {
                    title:'ipsum dolor sit',
                    num:'24K',
                    des:'+2.1% Lorem, ipsum ipsum'
                }
            ]
        }
    }
    
    render(){
        let { bar } = this.state
        return (
            <div className={style.textViewBox}>
                <ul className={style.textView}>
                    {
                        bar.map((res, i) => 
                            <li key={ i }>
                                <div className={style.viewLayout}>
                                    <h2 className={ style.viewTitle }>{ res.title }</h2>
                                    <p className={ style.viewNum  }>{ res.num }</p>
                                    <p className={style.viewDes}>{ res.des }</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default OverView


