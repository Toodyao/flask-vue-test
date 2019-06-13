<template>
  <div class="wrapper">
    <el-button @click="toLogin">登录</el-button>
    <el-button>注册</el-button>
  </div>
</template>

<script>

export default {
  name: 'MyHome',
  methods: {
    toLogin: function () {
      this.$router.push({path: '/loginpage'})
    }
  }
}
</script>
