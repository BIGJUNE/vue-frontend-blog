<template>
  <div id="app">
    <TopBar></TopBar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

export default {
  name: 'app',
  components: {
    TopBar
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
