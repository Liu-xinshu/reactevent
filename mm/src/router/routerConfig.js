import Loadable from 'react-loadable';
import React from 'react'


const Index =Loadable({
    loader:()=>import('@/views/index/index'),
    loading:()=><div>Loading......</div>
})



const Classify =Loadable({
    loader:()=>import('@/views/index/classify/index'),
    loading:()=><div>Loading......</div>
})



const Home =Loadable({
    loader:()=>import('@/views/index/home/index'),
    loading:()=><div>Loading......</div>
})



const Detail = Loadable({
    loader: () =>
        import ('../views/detail/index'),
        loading:()=><div>Loading......</div>
})

const My = Loadable({
    loader: () =>
        import ('@/views/my/index'),
         loading:()=><div>Loading......</div>
})

const Login = Loadable({
    loader: () =>
        import ('@/views/login/index'),
        loading:()=><div>Loading......</div>
})

const Shop = Loadable({
    loader: () =>
        import ('@/views/shop/index'),
       loading:()=><div>Loading......</div>
})


const routes = [{
        path: '/index',
        child:[
            {   
                path:'/index/classify',
                component:Classify
            },
            {   
                path:'/index/home',
                component:Home
            },
        ],
        component:Index
    },
    {
        path: '/detail',
        child: [],
        component: Detail
    },
    {
        path: '/my',
        child: [],
        component: My
    },
    {
        path: '/shop',
        child: [],
        component: Shop
    },
    {
        path: '/login',
        child: [],
        component: Login
    },{
        path:'/login',
        child:[],
        component:Login
    }
    , {
        path: '/',
        to: '/index/home'
    }
]

export default routes;