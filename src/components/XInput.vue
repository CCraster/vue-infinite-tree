<template>
  <input
    class="xinput"
    ref="input"
    type="text"
    autocomplete="off"
    v-bind="$attrs"
    :style="{ width: width }"
    :value="value_inner"
    :placeholder="placeholder"
    @input="handleInputValueChange"
  />
</template>

<script>
export default {
  name: 'XInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'please input'
    },
    width: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value_inner: ''
    }
  },
  computed: {
    input() {
      return this.$refs['input']
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
  mounted() {
    this.input.value = this.value_inner
  },
  methods: {
    handleInputValueChange(e) {
      this.value_inner = e.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
$color-primary: #ff6633;
$color-gray-1: #e4e7ed;
$color-gray-2: #c5c8ce;
.xinput {
  width: 100px;
  height: 28px;
  line-height: 28px;
  padding: 0 5px;
  border: 1px solid $color-gray-1;
  border-radius: 2px;
  outline: none;
  transition: all 0.2s;
  &:hover {
    border-color: $color-gray-2;
  }
  &:focus {
    border-color: $color-primary;
    caret-color: $color-primary;
  }

  &::selection {
    background: lighten($color-primary, 15%);
    color: #fff;
  }
}
</style>
