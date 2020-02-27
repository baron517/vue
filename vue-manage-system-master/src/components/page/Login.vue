
<style>
    @import "../../assets/cus/css/css.css";
    @import "../../assets/cus/css/bootstrap.min.css";
</style>

<template>

<div id="c-login">
<div class="c-login">
    <div class="c-login-top">
        <img src="../../assets/cus/img/login.png" width="436" height="72" title="">
    </div>
    <div class="c-login-con">
        <div class="c-login-tit">用户登录</div>
        <form>
            <div class="errorHandler alert alert-danger hide c-login-tip"></div>
            <div class="hide c-login-tip">用户名或密码不正确！</div>
            <dl>
                <dt><input type="text" class="validate[required]" id="userloginid" name="userloginid" placeholder="请输入您的帐号"  title="请输入您的帐号" onkeydown="ys_onkeydown(0,event)"/></dt>
                <dd>
                    <img src="http://jslzjs.qfyf.net:80/lzjs_jsssjw/client/images/c_login_ico_01.png" width="26" height="26">
                </dd>
            </dl>
            <dl>
                <dt><input type="password" class="validate[required]" id="userpwd" name="userpwd" placeholder="请输入您的密码" title="请输入您的密码" onkeydown="ys_onkeydown(1,event)"/></dt>
                <dd>
                    <img src="http://jslzjs.qfyf.net:80/lzjs_jsssjw/client/images/c_login_ico_02.png" width="26" height="26">
                </dd>
            </dl>
            <dl class="dl1">
                <dt><input type="text" class="validate[required]" id="yzm" name="yzm"  placeholder="请输入验证码" title="请输入验证码" onkeydown="ys_onkeydown(2,event)"/></dt>
                <dd>
                    <img src="http://jslzjs.qfyf.net:80/lzjs_jsssjw/client/images/c_login_ico_03.png" width="26" height="26">
                </dd>
                <div class="c-check-img">
                    <img id="img_u_v_i_c" name="u_v_i_c" src="http://jslzjs.qfyf.net:80/lzjs_jsssjw/generateImage/u_v_i_c" onclick="changeyzm()"/>
                </div>
            </dl>
            <button type="button" class="c-login-btn" @click="submitForm('ruleForm')"  title="登录">登录</button>
        </form>
    </div>
</div>
</div>

</template>

<script>
    export default {

        methods: {
            submitForm(formName) {
                this.$router.push('/dashboard');
                return false;
            }

            }

    }
</script>
