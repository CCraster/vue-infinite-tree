<template>
  <button
    class="xbutton"
    ref="button"
    v-bind="$attrs"
    @click="handleButtonClick"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    title: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleButtonClick(e) {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
$color-primary: #ff6633;
$color-gray-1: #e4e7ed;
$color-gray-2: #c5c8ce;
.xbutton {
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  border: none;
  background-color: $color-primary;
  color: #fff;
  border-radius: 2px;
  outline: none;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #fc8962;
  }
  &:focus {
    background-color: darken($color-primary, 15%);
  }
}
</style>
