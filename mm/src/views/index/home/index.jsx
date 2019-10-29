import React, { Component } from 'react'
import 'swiper/css/swiper.css';
import Swiper from 'swiper/js/swiper';
import BScroll from 'better-scroll';
import {getdata}from '@/requests/index';
import {connect}from 'react-redux';
 class Home extends Component {
    state={
        banner:[
            {
                img:'1.jpg'
            },
            {
                img:'2.jpg'
            },
            {
                img:'3.jpg'
            },
            {
                img:'4.jpg'
            },
        ],
        limit:10,
        page:1,
        list:[],
        flag:false
    }
   async getList(){
        let{page,limit,list,flag}=this.state;
        if(!flag){
            page++;
            let res= await getdata({page,limit});
            if(res.data.list.length<10){
                this.setState({
                    flag:true
                })
            }
            this.setState({
                list:list.concat(res.data.list),
                page
            },()=>{
                console.log(this.state.list)
            })
           
            this.myscroll.finishPullUp();
            this.myscroll.refresh();
        }
      
    }
    addList(item){
     
        this.props.changeShop(item);
    }
    render() {
        let{banner,list}=this.state;
        return (
            <div id="home">    
               <div className="swiper-container banner">
                   <div className="swiper-wrapper">
                       {
                           banner.map((item,index)=>{
                              return <div className="swiper-slide" key={index}>
                                   <img src={require('@/banner/'+item.img)} alt=""/>
                               </div>
                           })
                       }
                   </div>
               </div>
               <div className="scroll">
                   <div>
                       {
                           list&&list.map((item,index)=>{
                               return <dl key={item.id}>
                                   <dt><img src={item.img} alt=""/></dt>
                                   <dd>
                                       <h3>{item.title}</h3>
                                       <p><span>￥{item.price}</span><span onClick={this.addList.bind(this,item)}>+</span></p>
                                       <p>发货地址:{item.address}</p>
                                   </dd>
                               </dl>
                           })
                       }
                   </div>
               </div>
            </div>
        )
    }
    async componentDidMount(){
        let{page,limit,list}=this.state;
        new Swiper('.banner',{
            autoplay:true,
            loop:true
        })
        let res= await getdata({page,limit});
        this.setState({
            list:res.data.list
        })
        this.myscroll=new BScroll('.scroll',{
            click:true,
            probeType:3,
            pullDownRefresh:{
                threshold:50
            },
            pullUpLoad:{
                threshold:50
            }
        })

        

        this.myscroll.on('pullingDown',()=>{
            console.log("下拉刷新")
            this.setState({
                page:1,
                flag:false,
                list:[]
            },()=>{
                this.getList();
                this.myscroll.finishPullDown();
            })
           
        })

        this.myscroll.on('pullingUp',()=>{
            console.log("上拉加载")
           this.getList();
        })
    }
}
export default connect((state)=>{
 
    return {
        ...state,
        shopList:[...state.shopList.shopList]
    }
},(dispacth)=>{
    return {
        changeShop(item){
         
            dispacth({
                type:'ADD_SHOP',
                item
            })
        }
    }
})(Home)