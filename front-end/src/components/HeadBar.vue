<template>
  <div class="wrapper">
    <el-button>{{ login_state }}</el-button>
    <el-button @click="logout">注销</el-button>
  </div>
</template>

<script>

export default {
  name: 'HeadBar',

  computed: {
    login_state() {
      return this.$store.state.is_login
    }
  },
  methods: {
    logout () {
      window.localStorage.removeItem('token')
      // store.state.is_login = false
      
    }
  }
}
</script>
