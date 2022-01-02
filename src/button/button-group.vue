<template>
  <div class="h-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'hqsButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`h-button-group的子元素应该全是h-button,但是你写的是${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.h-button-group {
  display: inline-flex;
  vertical-align: middle;
  // margin-left: 8px;

  > .h-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>