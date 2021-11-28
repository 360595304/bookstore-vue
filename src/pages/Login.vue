<template>
    <!--登录表单的容器-->
    <div class="login_container">
        <!--登录区域-->
        <div class="login_box">

<!--            <div>请登录</div>-->
            <!--表单-->
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名称" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" placeholder="请输入登录密码" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <!--<el-form-item prop="verifyCode">
                    <div class="verifyCode_box">
                        <el-input v-model="loginForm.verifyCode" placeholder="请输入手机验证码" prefix-icon="el-icon-mobile" class="verifyCode"></el-input>
                        <img src="../assets/img/msFXK1.gif" alt="" class="verifyCode_img">
                    </div>
                </el-form-item>-->
                <el-form-item class="login_btn">
                    <el-button type="primary" @click="submitForm('loginForm')">登 录</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { USERLOGIN, USERLOGOUT } from '@/store/types'
    import { doLogin } from '@/api/login'
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                    //verifyCode: ''
                },
                loginRules: {
                    username: [
                        { required: true, message: '请输入用户名称', trigger: 'blur' },
                        { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入登录密码', trigger: 'blur' },
                        { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                    ],
                    /*verifyCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]*/
                }
            };
        },
        methods: {
            ...mapMutations([USERLOGIN, USERLOGOUT]),
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = await doLogin(this.loginForm)
                        console.log(res)
                        // 登录失败
                        if (res.code !== 200) {
                            return this.$message.error({
                                showClose: true,
                                message: res.message,
                                center: true,
                                duration: 1000
                            })
                        }
                        // 登录成功
                        this.$message.success({
                            showClose: true,
                            message: res.message,
                            center: true,
                            duration: 1000
                        })
                        // 保存token 用于权限验证
                        this[USERLOGIN](res.data.token)
                        await this.$router.push('/')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="less" scoped>
    .login_container {
        height: 100%;
        //background-color: aquamarine;
    }

    .login_box {
        width: 450px;
        height: 380px;
        //background-color: #FFFFFF;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #f5f5f5;
        .avatar_box{
            width: 130px;
            height: 130px;
            border: 1px solid #EEEEEE;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            margin: -65px auto;
            background-color: #FFFFFF;

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #EEEEEE;
            }
        }

        .login_form{
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding: 0px 20px;
            box-sizing: border-box;

            .login_btn{
                display: flex;
                justify-content: flex-end;
            }

            .verifyCode_box{
                display: flex;
                .verifyCode{
                    width: 70%;
                    justify-content: left;
                }

                .verifyCode_img{
                    width: 30%;
                    height: 45px;
                    justify-content: flex-end;
                }
            }
        }
    }
</style>
