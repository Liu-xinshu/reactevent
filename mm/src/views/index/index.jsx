import React, { Component } from 'react'
import RouterView from '@/router/routerView'
import{Link}from 'react-router-dom';
export default class Index extends Component {
    state={
        foots:[
            {
                title:'首页',
                path:'/'
            },
            {
                title:'分类',
                path:'/index/classify'
            },{
                title:'购物车',
                path:'/shop'
            },{
                title:'我的',
                path:'/my'
            }
        ],
        ind:0
    }
    changeInd(ind){
        this.setState({ind});
    }
    render() {
        let {foots,ind}=this.state;
        return (
            <div id="index">
                <RouterView routes={this.props.routes} />
               <footer>
                    {
                        foots.map((item,index)=>{
                            return <Link key={index} to={item.path} className={ind===index?'active':''} onClick={this.changeInd.bind(this,index)}>{item.title}</Link>
                        })
                    }
               </footer>
            </div>
        )
    }
}
