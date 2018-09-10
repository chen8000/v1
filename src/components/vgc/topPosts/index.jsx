
import React, {Component} from 'react'
import style from './index.scss'

class TopUsers extends Component{

    constructor(props){
        super(props)

        this.state = {
            users:[
                {
                    userName:'est libero in dolores vitae nulla magnam dignissimos eaque vel repudiandae reprehenderit!',
                    pageView:25
                },
                {
                    userName:'consectetur adipisicing elit. ',
                    pageView:25
                },
                {
                    userName:'Culpa sapiente harum, architecto recusandae perferendis non nostrum voluptatibus incidunt ',
                    pageView:25
                },
                {
                    userName:'Lorem ipsum dolor sit amet ',
                    pageView:25
                },
                {
                    userName:'consectetur adipisicing elit. consectetur adipisicing elit. ',
                    pageView:25
                },
                {
                    userName:'consectetur adipisicing elit. adipisicing',
                    pageView:25
                }
            ]
        }

    }

    render(){
        
        let { users } = this.state
        return(
            <div className={style.users}> 
                <h2 className={style.title}>TOP POSTS</h2>

                <div className={style.titlebar}>
                    <p>Title</p>
                    <p>View Count</p>
                </div>
                <div className={style.usersbox}>
                    <ul>
                        {
                            users.map((res, i) => 
                                <li key={i}>
                                    <p> 
                                        {res.userName}
                                    </p>
                                    <p>{res.pageView}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default TopUsers
