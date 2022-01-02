<template>
  <div id="app">
    <!-- <button-demo></button-demo> -->
    <!-- <input-demo></input-demo> -->
    <!-- <tabs-demo></tabs-demo> -->
    <!-- <grid-demo></grid-demo> -->
    <!-- <layout-demo></layout-demo> -->
    <!-- <toast-demo></toast-demo> -->
    <!-- <toast-demo1></toast-demo1> -->
    <!-- <toast-demo2></toast-demo2> -->
    <popover-demo></popover-demo>
    <collapse-demo></collapse-demo>
  </div>
</template>

<script>
// import ButtonDemo from './components/button-demo.vue'
// import GridDemo from './components/grid-demo.vue'
// import InputDemo from './components/input-demo.vue'
// import TabsDemo from './components/tabs-demo.vue'
// import LayoutDemo from './components/layout-demo.vue'
// import ToastDemo from './components/toast-demo.vue'
// import ToastDemo1 from './components/toast-demo1.vue'
// import ToastDemo2 from './components/toast-demo1.vue'
import PopoverDemo from './components/popover-demo.vue'
import CollapseDemo from './components/collapse-demo.vue'


export default {
  name: 'App',
  components: {
    // ButtonDemo,
    // InputDemo,
    // TabsDemo,
    // GridDemo,
    // LayoutDemo,
    // ToastDemo,
    // ToastDemo1,
    // ToastDemo2,
    PopoverDemo,
    CollapseDemo
  },
  data () {
    return {
      loading1: true,
      loading2: false,
    }
  }
}
</script>

<style>
</style>
