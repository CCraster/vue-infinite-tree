<template>
  <div class="vit-node-wrapper" :style="nodeStyle">
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
        checked: treeNode.state.selected,
        'checkbox-disabled': treeNode.state.disableCheckbox
      }"
      @click.stop="onCheckNode"
      v-if="checkable"
    ></span>
    <span
      ref="vit-node-content"
      class="vit-node-content"
      :class="{
        'vit-node-focus': isNodeFocus,
        'is-drag-over': isDragOver
      }"
      draggable
      @click="onNodeClick"
      @dragstart="onNodeContentDragStart(treeNode.id, index)"
      @dragend="onNodeContentDragEnd()"
    >
      <!-- {{ treeNode.name }} -->
      <span @blur="onNodeBlur" draggable="false">{{ treeNode.name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    // 在原数据数组里的序号
    index: {
      type: Number,
      default: -1
    },
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
    },
    // 是否能够复选
    checkable: {
      type: Boolean,
      default: false
    },
    // 是否是拖动的目标对象
    isDragOver: {
      type: Boolean,
      default: false
    },
    onNodeContentDragStart: {
      type: Function,
      default: () => {}
    },
    onNodeContentDragEnd: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      // nodeEditable: false,
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
    onCheckNode() {
      !this.treeNode.state.disableCheckbox &&
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
    // onNodeContentDragStart(e) {
    //   // this.isNodeContentDragOver = true
    //   // console.log(e.type, e)
    // },
    // onNodeContentDragOver(e) {
    //   // this.isNodeContentDragOver = true
    //   // console.log('in')
    // },
    // onNodeContentDragEnd(e) {
    //   // this.isNodeContentDragOver = false
    //   // console.log(e.type, e)
    // }
  }
}
</script>
