import Home from "../components/home"
import Login from "../components/login"
import Register from "../components/register"
import Detail from "../components/Detail"
import Error from "../components/Error"

 const routerConfig= [
    {
        path:'/',
        component:Home,
        auth:true,
    },{
        path:'/home',
        component:Home,
        auth:true,
    },{
        path:'/login',
        component:Login,
    },{
        path:'/register',
        component:Register,
    },
    {
        path:'/detail',
        component:Detail,
        auth:true,
    },
    {
        path:'/error',
        component:Error,
    }
];

export default  routerConfig