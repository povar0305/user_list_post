import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import selectUsers from "@/components/SelectUsers";
import user_main from "@/components/user_main";
export default [
    {path:'/user/',component:user_main},
    {path:'/',component:selectUsers}
]