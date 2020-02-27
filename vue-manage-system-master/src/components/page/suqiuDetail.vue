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

                <p>诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容诉求内容</p>
			
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
		    
		    <div class="comment">
		        
                <div class="small-title">评价列表</div>
                
                <ul class="comment-list">
                    <li>
                        <span class="name">某某用户</span>
                        <p>关于印发甲类大型医用设备配置许可管理实施细则的通知</p>
                        <span class="time">2018-08-03</span>
                    </li>
                    <li>
                        <span class="name">某某用户</span>
                        <p>党的各级纪律检查委员会每届任期和同级党的委员会相同</p>
                        <span class="time">2018-08-03</span>
                    </li>
                    <li>
                        <span class="name">某某用户</span>
                        <p>直辖市及新疆生产建设兵团卫生计生委</p>
                        <span class="time">2018-08-03</span>
                    </li>
                    <li>
                        <span class="name">某某用户</span>
                        <p>党的各级纪律检查委员会每届任期和同级党的委员会相同</p>
                        <span class="time">2018-08-03</span>
                    </li>
                    <li>
                        <span class="name">某某用户</span>
                        <p>直辖市及新疆生产建设兵团卫生计生委</p>
                        <span class="time">2018-08-03</span>
                    </li>
                </ul>
            
            </div>


            </div>
            
            


    </div>

</div>




</div>


</template>

<script>

    export default {

        data: function(){
            return {
                list: [
                    {img:'assets/img/img2.jpg'},
                    {img:'assets/img/img1.jpg'},
                    {img:'assets/img/img2.jpg'},
                    {img:'assets/img/img1.jpg'},
                    {img:'assets/img/img2.jpg'},
                    {img:'assets/img/img1.jpg'}
                ]
            }
        },
        methods: {
            submitContent: function (event) {

                alert("提交成功");
                window.location.href="/#/baoguangList.html";

            }
        }

    }


</script>

