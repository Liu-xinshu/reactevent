import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'

function RouterView(props){
    let {routes}=props;
    let RouterArr=routes&&routes.filter(item=>!item.to);
    let RedirectArr=routes&&routes.filter(item=>item.to).map((item,index)=><Redirect from ={item.path} to={item.to} key={index}/>);

    return <Switch>
        {
            RouterArr&&RouterArr.map((item,index)=>{
                return <Route path={item.path} key={index} render={(props)=>{
                    return <item.component {...props} routes={item.child}/>
                }}/>
            }).concat(RedirectArr)
        }
    </Switch>
}

export default RouterView;