
import React,{Component}from 'react'
export const IsLogin=(Com)=>{
    return class extends Component{
        state={
            show:false
        }
        render(){
            return <>
                {
                    this.state.show?<Com {...this.props}/>:null
                }
            </>
        }
        componentDidMount(){
            if(window.localStorage.user){
                //已登录
                this.setState({
                    show:true
                })
            }else{  
                //未登录
                this.props.history.push('/login')
            }
        }
    }
}