<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'hqsTabsBody',
  inject: ['eventBus'],
  created () {
  }
}

</script>
<style>
</style>