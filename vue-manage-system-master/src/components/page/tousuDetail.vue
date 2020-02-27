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
        <div class="list">


            <div class="link-list content-col">

                <div class="top-text"><span>某某公司</span> <span>2018-09-04</span></div>

                <p>投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉投诉</p>
			
		    </div>
		    
		    <div class="comment detail-col">
		        <div class="small-title">图片</div>
		        
		        <div class="img-list clearfix">
		               
		            <img  v-for="item in list" :src="item.img"/>
		           
		        </div>
		        
	        </div>
		    
		    <div class="comment detail-col">
		        <div class="small-title">处理内容</div>
		        
		        <div>
		            处理事情处理事情处理事情处理事情处理事情处理事情处理事情处理事情处理事情处理事情处理事情处理事情
		        </div>
		        
	        </div>
		    
            <div class="button-btn">
                <a href="/#/baoguang">一键曝光</a>
            </div>

        </div>

    </div>

</div>


</div>
</template>



<script>

    export default {
        data: function() {
            return {
                list: [
                    {img:'assets/img/img2.jpg'},
                    {img:'../../assets/img/img1.jpg'},
                    {img:'../../assets/img/img2.jpg'},
                    {img:'../../assets/img/img1.jpg'},
                    {img:'../../assets/img/img2.jpg'},
                    {img:'../../assets/img/img1.jpg'}

                ]
            }
        },

        methods: {
            submitContent: function (event) {

                alert("提交成功");
                window.location.href="/#/baoguangList";

            }
        }

    }

</script>