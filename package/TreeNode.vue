<template>
  <div class="vit-node-wrapper" :style="nodeStyle" draggable>
    <span
      class="vit-node-arrow"
      :class="{
        'fa fa-angle-right': !treeNode.isLeaf,
        collapsed: !treeNode.isLeaf && treeNode.state.opened
      }"
      @click.stop="onNodeOpenClick"
    />
    <span
      class="vit-node-checkbox"
      :class="{
        checked: treeNode.state.selected
      }"
      @click.stop="onSelectNode"
    ></span>
    <span
      class="vit-node-content"
      :class="{ 'vit-node-focus': isNodeFocus }"
      @click="onNodeClick"
    >
      <span @blur="onNodeBlur">{{ treeNode.name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    treeNode: {
      type: Object,
      default: () => {}
    },
    // 缩进pix值
    tabSize: {
      type: Number,
      default: 8
    },
    // y轴偏移量
    translateY: {
      type: Number,
      default: 0
    },
    // 节点是否在聚焦
    isNodeFocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // nodeEditable: false
    }
  },
  computed: {
    nodeDepth() {
      return this.treeNode.path.reduce((acc, cur) => {
        return cur === 'children' ? acc : acc + 1
      }, 0)
    },
    nodeStyle() {
      return {
        paddingLeft: this.tabSize * (this.nodeDepth - 1) + 'px',
        transform: `translate(0, ${this.translateY}px)`
      }
    }
  },
  methods: {
    onNodeOpenClick() {
      !this.treeNode.isLeaf && this.$emit('vit-openNode', this.treeNode.path)
    },
    onSelectNode() {
      this.$emit(
        'vit-selectNode',
        this.treeNode.path,
        !this.treeNode.state.selected
      )
    },
    onNodeClick() {
      let data = this.isNodeFocus ? null : this.treeNode
      this.$emit('setFocusNode', data)
    },
    onNodeBlur(e) {
      if (e.target.innerHTML !== this.treeNode.name) {
        this.$emit('vit-changeNode', this.treeNode.path, e.target.innerHTML)
      }
    }
  }
}
</script>
