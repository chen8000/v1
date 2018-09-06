
import React, { Component } from 'react'
import style from './app.scss'


// 子组件
import OverView from './overView'
import Detail from './detail'

class App extends Component {

    render(){
        return (
            <div className={ style.app }>
                <h2 className={ style.title }>Lorem, ipsum dolor sit amet consectetur adipisicing </h2>
                <h3 className={ style.mintitle }>psum dolor sit</h3>

                {/* 数字 */}
                <OverView />
                {/* line charts */}
                <Detail />
            </div>
        )
    }
}

export default App


