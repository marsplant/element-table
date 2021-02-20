<template>
  <div id="app">
    <el-container>
      <el-aside class="el-aside" width="150px">
        <el-menu
          router
          default-active="/"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/goods">
            <i class="el-icon-goods"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="/analysis">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">数据分析</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="stylus">
@import url("//unpkg.com/element-ui@2.15.0/lib/theme-chalk/index.css");
html, body, #app
  margin 0 0
  padding 0 0
  height 100vh
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  .el-container
    height 100%
    .el-menu
      height 100%
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
