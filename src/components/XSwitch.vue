<template>
  <span
    class="xswitch"
    v-bind="$attrs"
    @click="handleSwitchClick"
    :class="{ active: value_inner }"
  >
  </span>
</template>

<script>
export default {
  name: 'XSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value_inner: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.value_inner = newValue
        }
      }
    },
    value_inner: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$emit('input', this.value_inner)
        }
      }
    }
  },
  methods: {
    handleSwitchClick(e) {
      this.value_inner = !this.value_inner
    }
  }
}
</script>

<style lang="scss" scoped>
$color-primary: #ff6633;
$color-gray-0: #eaedf3;
$color-gray-1: #e4e7ed;
$color-gray-2: #c5c8ce;
.xswitch {
  $width: 20px;
  height: $width;
  position: relative;
  width: $width * 2;
  display: inline-block;
  background-color: $color-gray-0;
  border-radius: $width / 2;
  transition: all 0.4s;
  cursor: pointer;
  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    width: $width - 4px;
    height: $width - 4px;
    border-radius: 100%;
    background-color: #fff;
    transition: all 0.4s;
  }
  &.active {
    background-color: $color-primary;
    &:before {
      left: $width + 2px;
    }
  }
}
</style>
