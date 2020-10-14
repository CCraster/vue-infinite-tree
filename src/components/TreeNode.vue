<template>
  <div
    class="node-wrapper"
    :class="{ 'node-focus': isNodeFocus }"
    :style="nodeStyle"
    @click="onNodeClick"
  >
    <span
      class="check-box"
      :class="{
        checked: treeNode.state.selected
      }"
      @click.stop="onSelectNode"
    ></span>
    <span
      :class="{
        'el-icon-folder-remove': !treeNode.isLeaf && treeNode.state.opened,
        'el-icon-folder-add': !treeNode.isLeaf && !treeNode.state.opened,
        'el-icon-price-tag': treeNode.isLeaf
      }"
      :style="{
        marginRight: '4px',
        transform: treeNode.isLeaf ? 'rotate(0.5turn)' : 'none'
      }"
      @click.stop="onNodeOpenClick"
    />
    <span :class="{}" @click.stop @blur="onNodeBlur" contenteditable>{{
      treeNode.name
    }}</span>
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

<style lang="less" scoped>
@--color-primary: #453452;

.node-highlight {
  color: white;
}
.node-wrapper {
  position: absolute;
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    background-color: fadeout(@--color-primary, 60%);
    .node-highlight;
  }

  &.node-focus {
    background-color: fadeout(@--color-primary, 20%);
    .node-highlight;
  }

  .check-box {
    width: 18px;
    height: 18px;
    background-color: #efefef;
    background-color: fadeout(#f67505, 80%);
    border: 1px solid #f67505;
    margin-right: 4px;
    border-radius: 2px;

    &.checked {
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        display: inline-block;
        border-radius: 2px;
        width: 10px;
        height: 10px;
        content: '';
        background-color: #f67505;
      }
    }
  }
}
</style>
