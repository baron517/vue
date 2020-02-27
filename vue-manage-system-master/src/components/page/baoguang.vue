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

               

                <div class="form-col">
                    
                    
                    <div class="form-row">
                    <div class="form-title">标题</div>
                    <input type="text" />
                    </div>
                    
                    <div class="form-row">
                    <div class="form-title">内容</div>
                    <textarea></textarea>
                    </div>
                    
                    
                    <div class="btn-col">
                        <button type="button" v-on:click="submitContent" class="bottom-btn">提交</button>
                    </div>
                    
                    
                </div>


            </div>
            
            


        </div>

    </div>

</div>

</div>

</template>

<script>
    export default {

        methods: {
            submitContent: function (event) {

                alert("提交成功");
                window.location.href="/#/baoguangList";

            }
        }

    }
</script>



