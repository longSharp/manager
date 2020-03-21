import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载引入组件
const Index = ()=>import("../views/Index.vue")
const Register = ()=>import("../views/Register.vue")
const NotFound = ()=>import("../views/404.vue")
const Login = ()=>import("../views/Login.vue")
const Home = ()=>import("../views/Home.vue")
const InfoShow = ()=>import("../views/InfoShow.vue")
const FoundList = ()=>import("../views/FoundList.vue")

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/index"
  },
  {
    path:"/index",
    name:"index",
    component:Index,
    children:[
      {
        path:'',
        component:Home
      },
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:"/infoshow",
        name:"infoshow",
        component:InfoShow
      },
      { 
        path: '/foundlist', 
        name: 'foundlist', 
        component: FoundList 
      }
    ]
  },
  {
    path:"/register",
    name:"register",
    component:Register
  },
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"*",
    name:"notfound",
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.eleToken?true:false;
  if (to.path == "/login"||to.path =="/register") {
    next();
  }else{
    isLogin?next():next("/login");
  }
})

export default router
