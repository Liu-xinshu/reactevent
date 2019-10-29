import React from 'react';
import{BrowserRouter}from 'react-router-dom';
import routes from './routerConfig';
import RouterVivew from './routerView';

function RouterRoot(){
    return <BrowserRouter>
        <RouterVivew routes={routes}/>
    </BrowserRouter>
}

export default RouterRoot;