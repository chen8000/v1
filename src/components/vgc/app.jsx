
import React, { Component } from 'react'
import style from './app.scss'


// 子组件
import OverView from './overView'
import Detail from './detail'
import Stacked from './stacked'
import TopUsers from './topUsers'
import TopPosts from './topPosts'

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
                {/* 柱形图 */}
                <Stacked />

                {/* 两列布局 */}

                {/* 两列布局 */}
                <div className={style.twoLayout}>
                    {/* topUsers */}
                    <div className={style.topUsers}>
                        <TopUsers /> 
                    </div>

                    {/* topPosts */}
                    <div className={style.topPosts}>
                        <TopPosts />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App


