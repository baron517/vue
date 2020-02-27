<style>
    @import "../../assets/cus/css/base.css";
    @import "../../assets/cus/css/main.css";
    @import "http://at.alicdn.com/t/font_1086807_bj8xf0kt99.css";
</style>

<template>

<div id="c-login">

<div class="c-login" id="main">
    <div class="c-login-top">
        <img src="assets/img/login.png" width="436" height="72" title="">
    </div>


    <div class="mw">
        <div class="list list-col">

            <div class="top-title">企业诉求</div>
            
             <div class="search-col">
            <label>关键字：</label><input type="text" />
             <label>时间：</label><input type="text" />
            
            <button type="button">搜索</button>

            </div>
            

            <div class="link-list">
                
             <a>
                <span>标题</span>
                <span class="right-text"><span class="company">公司</span>
                <span class="name">调查人</span> 
                <span class="date-text">日期</span> </span>
            </a>
                
            <a href="/#/suqiuDetail" v-for="item in list">
                <span class="no">{{item.no}}</span>
                <span>{{item.title}}</span>
                <span class="right-text">
                    <span class="company">{{item.company}}</span>
                    <span class="name">{{item.name}}</span>
                    <span class="date-text">{{item.date}}</span> 
                </span>
            </a>
            
           
            </div>
            
             <!-- pagination start-->
            <div class="wrap" id="wrap">

                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>


            </div>
        	<!-- pagination end-->


        </div>

    </div>

</div>





</div>

</template>


<script>


    export default {

        data: function(){
            return {
                total: 150,     // 记录总条数
                display: 10,   // 每页显示条数
                current: 1,   // 当前的页数
                list: [
                    {no:1,title: '市卫健委党委召开市直卫健系统党建工',company:'某某公司公司',date:'2018-03-03',name:'某某人'},
                    {no:2,title: '市卫健委党委召开市直卫健系统党建工',company:'某某公司公司',date:'2018-03-03',name:'某某人'},
                    {no:3,title: '市卫健委党委召开市直卫健系统党建工',company:'某某公司公司',date:'2018-03-03',name:'某某人'},
                    {no:4,title: '市卫健委党委召开市直卫健系统党建工',company:'某某公司公司',date:'2018-03-03',name:'某某人'}

                ]
            }
        },

        methods: {
            handleCurrentChange:function()
            {

            }
        },

        created:function(){

        }

    }



</script>

