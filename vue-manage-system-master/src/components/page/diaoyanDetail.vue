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
        <div class="list content-col">


            <div class="link-list content-col">

                <div class="top-title-text">问题问题问题问题问题问题问题问题问题问题问题问题</div>

                <div class="top-text"><span>调研对象：某某某</span> <span>调研人：某某某</span></div>

                <div class="info-text">
                   <p>问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容</p>
                </div>

              <!--  <div class="form-col">
                    <div class="form-row">
                    <div class="form-title">内容</div>
                    <textarea></textarea>
                    </div>
                    
                    <div class="form-row">
                        <span class="upload-col">
                            <i class="iconfont icon-addition"></i>
                            添加图片
                            <input type="file" />
                        </span>
                    </div>
                    
                    <div class="btn-col">
                        <button type="button" class="bottom-btn">提交</button>
                    </div>
                    
                    
                </div>-->


            </div>
            
             <div class="comment detail-col">
		        <div class="small-title">图片</div>
		        
		        <div class="img-list clearfix">
		               
		            <img  v-for="item in list" :src="item.img"/>
		           
		        </div>
		        
	        </div>
            
            
            <div class="comment detail-col">
		        <div class="small-title">调研方案：</div>
		        
		        <div>
		            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
		        </div>
		        
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
                    {img:'../../assets/img/img2.jpg'},
                    {img:'../../assets/img/img1.jpg'},
                    {img:'../../assets/img/img2.jpg'},
                    {img:'../assets/img/img1.jpg'},
                    {img:'../../assets/img/img2.jpg'},
                    {img:'../../assets/img/img1.jpg'}
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