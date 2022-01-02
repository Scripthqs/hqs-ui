<template>
  <button class="h-button" :disabled="disabled" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <h-icon class="icon" v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="loading icon" v-if="loading" name="loading"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon/icon.vue'

export default {
  name: 'hqsButton',
  components: {
    'h-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      //语法监测
      validator (value) {
        if (value !== 'left' && value !== 'right') {
          console.error('set属性只能是left或者right')
          return false
        } else {
          return true
        }

      }
    }
  }
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 5px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.h-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //解决inline引起上下不对齐的问题
  // margin-left: 4px;
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .h-button-content {
    order: 2;
  }

  > .icon {
    margin-right: 0.2em;
    justify-content: center;
  }

  &.icon-right {
    > .h-button-content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-left: 0.2em;
      margin-right: 0;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
  &[disabled] {
    border-color: #bbb;
    color: #bbb;
    cursor: not-allowed;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>