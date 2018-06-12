/**
 * Created by Administrator on 2016/12/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import store from '../store/index'
import Home from '../components/Home.vue'  //首页
import Detail from '../components/Detail.vue' //详情
import My from '../components/My.vue'      //我的
import GoRent from '../components/GoRent.vue' //去创建房本
import Rent from '../components/Rent.vue'  //出租
import SeekingRent from '../components/SeekingRent.vue' //求租

import Test from '../components/Test.vue' //测试
import Test1 from '../components/Test1.vue' //测试
const routes = [
    { path: '*', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/detail', component: Detail },
    { path: '/my', component: My },
    { path: '/gorent', component: GoRent },
    { path: '/rent', component: Rent },
    { path: '/seekingrent', component: SeekingRent },
    { path: '/test', component: Test },
    { path: '/test1', component: Test1 },
]


const router = new VueRouter({
    // mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (store.state.data.token) {
        next();
    } else {
        next();
        /* console.log("你还没有登录啦")
         if (to.meta.requireAuth==false) {
             next();
         }else {
             next({ path: '/login' })
         }*/
    }
})

export default router;