<template>
  <div id="app">
     <app-header></app-header>
     <router-view></router-view>
  </div>
</template>

<script>

import addBlog from './components/addBlog.vue'
import ShowBlogs from './components/showBLogs.vue'
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    'add-blog':addBlog,
    'show-blogs':ShowBlogs,
    'app-header':Header
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
