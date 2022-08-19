import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import selectUsers from "@/components/SelectUsers";
import user_main from "@/components/user_main";

export default [
    {path:'/',name:'main',component:selectUsers},
    {path:'/user/',name:'user_main',component:user_main,props:true},

]