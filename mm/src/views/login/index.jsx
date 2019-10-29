import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <div>
               <div onClick={()=>{
                   window.localStorage.user='刘新书';
                   this.props.history.go(-1);
               }}>登陆</div>
            </div>
        )
    }
}
