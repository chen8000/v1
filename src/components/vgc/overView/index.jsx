
import React, { Component } from 'react'
import style from './index.scss'
import { OverViewJson } from '../config/fetchindex'
import 'fetch-detector'
import 'fetch-ie8'

class OverView extends Component {

    constructor(props){
        super(props)

        this.state = {
            bar:[]
        }
    }

    componentWillMount(){
        fetch(OverViewJson)
            .then(res => res.json())
            .then(res => {
                this.setState({ bar:res })
            })
    }
    
    render(){
        let { bar } = this.state
        return (
            <div>
                <h2 className={ style.title }>WeConnect | VCIC IT Site User Report</h2>
                <h3 className={ style.mintitle }>Overview</h3>
                <div className={style.textViewBox}>
                    <ul className={style.textView}>
                        {
                            bar.map((res, i) => 
                                <li key={ i }>
                                {
                                    res ? <div className={style.viewLayout}>
                                            <h2 className={ style.viewTitle }>{ res.title }</h2>
                                            <p className={ style.viewNum  }>{ res.num }</p>
                                            <p className={style.viewDes}>{ res.des }</p>
                                        </div> : null
                                }
                                    
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default OverView


