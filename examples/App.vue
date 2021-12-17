<template>
  <div id="app">
    <f-button disabled>按钮</f-button>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button-demo></button-demo>
    <collapse-demo></collapse-demo>
    <toast-demo></toast-demo>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ButtonDemo from './components/button-demo.vue'
import CollapseDemo from './components/collapse-demo.vue'
import ToastDemo from './components/toast-demo.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    'button-demo': ButtonDemo,
    'collapse-demo': CollapseDemo,
    'toast-demo': ToastDemo

  }
}
</script>

<style>
</style>
