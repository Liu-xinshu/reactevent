import React, { Component } from 'react'
import {getclassify}from '@/requests/index';
import BScroll from 'better-scroll';
import {connect}from 'react-redux'
class Classify extends Component {
    state={
        list:[],
        ind:0,
        listH:[]
    }
    changeInd(ind){
        this.myscroll.scrollToElement(this.refs['id'+ind],1500)
        this.setState({
            ind
        })
    }
    addshoop(item){
       this.props.changeShop(item);
    }
    render() {
        let {list,ind}=this.state;
        return (
            <div id='classify'>
                <header>
                    {
                        list&&list.map((item,index)=>{
                            return <span key={index} className={index===ind?'active':''} onClick={this.changeInd.bind(this,index)}>{item.name}</span>
                        })
                    }
                </header>
                <div className="content">
                    <div ref='scroll'>
                        {
                            list&&list.map((item,index)=>{
                                return <div key={index} ref={'id'+index} className={'class'}>
                                    <h3>{item.name}</h3>
                                   {
                                       list&&list[index].child.map((item1,index1)=>{
                                           return  <dl key={index1}>
                                           <dt><img src={item1.img} alt=""/></dt>
                                           <dd>
                                               <p>{item1.title}</p>
                                               <p><span>￥{item1.price}</span><span onClick={this.addshoop.bind(this,item1)}>+</span></p>
                                                <p>发货地址:{item1.address}</p>
                                           </dd>
                                       </dl>
                                       })
                                   }
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
   async componentDidMount(){
    let res=await getclassify();
 this.setState({
        list:res.data.list
    })
    this.myscroll=new BScroll('.content',{
        click:true,
        probeType:3
    })
   }

}


export default connect((state)=>{
    return {
        ...state
    }
},(dispatch)=>{
    return {
        changeShop(item){
            dispatch({
                type:'ADD_SHOP',
                item
            })
        }
    }
})(Classify)