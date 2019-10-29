import React, { Component } from 'react'
import {connect}from 'react-redux'
 class Shop extends Component {
    
    render() { 
        let {shopList,allcheck,total}=this.props;console.log(this.props)
        return (
            <div id='shop'>
                <div onClick={()=>this.props.history.go(-1)}>返回</div>
               {
                   shopList.length>0? <div className='allCheck'>
                   <p>全选</p>
                   <i onClick={this.changeAllCheck.bind(this)} className={allcheck?'active':''}></i>
               </div>:null
               }
                {
                    shopList&&shopList.map((item,index)=>{
                        return <dl key={item.id}>
                        <dt>
                            <i onClick={this.changeChecked.bind(this,item.id)} className={item.checked?'active':''}></i>
                            <img src={item.img} alt=""/>
                        </dt>
                        <dd>
                            <h3>{item.title}</h3>
                           <div>
                               ￥{item.price} <div>
                                  {
                                      item.count>0? <span onClick={this.changeCount.bind(this,item.id,item.count-1)}>-</span>:null
                                  }
                                   <span>{item.count}</span>
                                   <span onClick={this.changeCount.bind(this,item.id,item.count+1)}>+</span>
                               </div>
                           </div>
                        </dd>
                    </dl>
                    })
                }
                {
                    shopList.length<=0?  <div>购物车中没有商品</div>:  <div className="total">
                    总价：￥{total}
                </div>
                }
              
              
            </div>
        )
    }
    changeChecked(id){
        this.props.changeShopCheck(id);
    }
    changeAllCheck(){
       this.props.changeShopAllCheck()
    }
    changeCount(id,count){
     this.props.changeShopCount(id,count);
    }
   async componentDidMount(){

    }
}
export default connect((state)=>{

    return {
        ...state,
        shopList:[...state.shopList.shopList],
        allcheck:state.shopList.allcheck,
        total:state.shopList.total
    }
},(dispatch)=>{
    return {
        changeShopCheck(id){
            dispatch({
                type:'CHANGE_CHECK',
                id
            })
        },
        changeShopAllCheck(){
            dispatch({
                type:'CHANGE_ALLCHECK',
            })
        },
        changeShopCount(id,count){
            dispatch({
                type:'CHANGE_COUNT',
                id,
                count
            })
        }
    }
})(Shop)
