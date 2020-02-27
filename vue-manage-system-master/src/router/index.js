import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            component: resolve => require(['../components/page/Dashboard.vue'], resolve)
         },

        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/baoguang',
                component: resolve => require(['../components/page/baoguang.vue'], resolve)
        },
{
    path: '/baoguangDetail',
        component: resolve => require(['../components/page/baoguangDetail.vue'], resolve)
},
{
    path: '/detail',
        component: resolve => require(['../components/page/detail.vue'], resolve)
},
{
    path: '/diaoyanDetail',
        component: resolve => require(['../components/page/diaoyanDetail.vue'], resolve)
},
{
    path: '/jinduDetail',
        component: resolve => require(['../components/page/jinduDetail.vue'], resolve)
},
{
    path: '/qiyesuqiu',
        component: resolve => require(['../components/page/qiyesuqiu.vue'], resolve)
},
{
    path: '/suqiuDetail',
        component: resolve => require(['../components/page/suqiuDetail.vue'], resolve)
},


{
    path: '/tongji',
        component: resolve => require(['../components/page/tongji.vue'], resolve)
},
{
    path: '/suqiuDetail',
        component: resolve => require(['../components/page/suqiuDetail.vue'], resolve)
},
{
    path: '/tousu',
        component: resolve => require(['../components/page/tousu.vue'], resolve)
},
{
    path: '/tousuDetail',
        component: resolve => require(['../components/page/tousuDetail.vue'], resolve)
},

{
    path: '/diaoyan',
        component: resolve => require(['../components/page/diaoyan.vue'], resolve)
},

{
    path: '/baoguangList',
        component: resolve => require(['../components/page/baoguangList.vue'], resolve)
},

{
    path: '/jindu',
        component: resolve => require(['../components/page/jindu.vue'], resolve)
},


        {
            path: '/403',
                component: resolve => require(['../components/page/403.vue'], resolve),
            meta: { title: '403' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
