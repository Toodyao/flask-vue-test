<template>
  <div class="wrapper2">

    <el-form ref="loginForm" :model="loginForm" label-width="80px">
      <el-form-item label="用户名">
        <el-col :span="8">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="8">
          <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
        </el-col>
      </el-form-item>
      <el-button type="primary" @click="submitLogin">登录</el-button>
    </el-form>
    <el-button>{{ login_state }}</el-button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      login_state: this.$store.state.is_login ? "已登录" : "未登录"
    };
  },
  methods: {
    submitLogin: function () {
      // 拿到token即为登录成功
      const path = 'http://localhost:5000/api/tokens'
      
      axios.post(path, {}, {
        auth: {
          'username': this.loginForm.username,
          'password': this.loginForm.password
        }
      }).then((response) => {
        // 成功
        // 保存token
        window.localStorage.setItem('token', response.data.token)
        this.$store.commit('login')
          this.$message({
            message: '登录成功',
            type: 'success'
          });
        // if (typeof this.$route.query.redirect === 'undefined') {
        //   this.$router.push('/')
        // } else {
        //   this.$router.push(this.$route.query.redirect)
        // }
      })
        .catch((error) => {
          // handle error
          if (error.response.status == 401) {
            this.loginForm.usernameError = 'Invalid username or password.'
            this.loginForm.passwordError = 'Invalid username or password.'
          } else {
            console.log(error.response)
          }
            this.$message.error('用户名或密码不正确');
        })
    }
  }
};
</script>
