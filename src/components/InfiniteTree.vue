<template>
  <div class="vit-wrapper" :style="{}" @scroll="onScroll">
    <div
      :style="{
        position: 'relative',
        height: totalNodeList.length * 22 + 'px'
      }"
      @mouseenter="handleMouseEnter(true)"
      @mouseleave="handleMouseEnter(false)"
    >
      <tree-node
        v-for="(node, index) in shouldRenderNodeList"
        :key="node.id"
        :treeNode="node"
        :tabSize="tabSize"
        :translateY="(renderNodePosRange[0] + index) * treeNodeHeight"
        :isNodeFocus="focusNode && node.id === focusNode.id"
        @setFocusNode="handleSetFocusNode"
        @vit-changeNode="handleChangeNode"
        @vit-selectNode="handleSelectNode"
        @vit-openNode="handleOpenNode"
      />
    </div>
  </div>
</template>

<script>
import TreeNode from './TreeNode'
import {
  treeJson2List,
  getValueFromPath,
  setChildrenStatus,
  checkAncestorStatus
} from '@/utils'
import { generateTreeNode } from '@/utils/dataMock.js'

export default {
  name: 'InfiniteTree',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TreeNode
  },
  data() {
    return {
      shouldRenderNodeList: [],
      renderNodePosRange: [0, 100], // 记录需要渲染的节点的下标最小&最大值
      focusNode: null,
      isTreeFocus: false,
      tabSize: 16, // tree缩进px
      treeNodeHeight: 22 // 树节点高度
    }
  },
  computed: {
    totalNodeNum() {
      return this.totalNodeList.length
    }
  },
  watch: {
    value: {
      // deep: true,
      immediate: true,
      handler(newValue) {
        // if (true || JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this._treeData = newValue
        this.totalNodeList = treeJson2List(newValue)
        this.computeShouldRenderNodeList()
        // }
      }
    },
    renderNodePosRange: {
      handler() {
        this.computeShouldRenderNodeList()
      }
    }
  },
  mounted() {
    window.addEventListener('keyup', this.handleKeyUp)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleKeyUp)
  },
  methods: {
    makeNewTreeData() {
      this._treeData = [...this._treeData]
      this.$emit('input', this._treeData)
    },
    onScroll(e) {
      const config = {
        nodeHeight: 22, // 节点高度
        visibleOffset: 2 // 视窗上下visibleOffset个高度的节点渲染
      }
      let scrollTop = e.target.scrollTop,
        targetHeight = e.target.clientHeight
      if (scrollTop !== 0 && !scrollTop) return

      let startVisiblePos = scrollTop - targetHeight * config.visibleOffset,
        endVisiblePos = scrollTop + targetHeight * (config.visibleOffset + 1)
      startVisiblePos = startVisiblePos > 0 ? startVisiblePos : 0
      endVisiblePos =
        endVisiblePos < config.nodeHeight * this.totalNodeNum
          ? endVisiblePos
          : config.nodeHeight * this.totalNodeNum
      this.renderNodePosRange = [
        Math.floor(startVisiblePos / config.nodeHeight),
        Math.ceil(endVisiblePos / config.nodeHeight)
      ]
    },
    computeShouldRenderNodeList() {
      if (this.renderNodePosRange.length === 2) {
        // this.shouldRenderNodeList = this.totalNodeList.slice(
        //   this.renderNodePosRange[0],
        //   this.renderNodePosRange[1]
        // )
        this.shouldRenderNodeList.length = 0
        this.shouldRenderNodeList.push(
          ...this.totalNodeList.slice(
            this.renderNodePosRange[0],
            this.renderNodePosRange[1]
          )
        )
      } else {
        this.shouldRenderNodeList = this.totalNodeList
      }
    },
    handleMouseEnter(isFocus) {
      this.isTreeFocus = isFocus
    },
    // 处理按键事件
    handleKeyUp(e) {
      if (!this.isTreeFocus || !this.focusNode) return

      // 删除节点 - backspace
      if (e.keyCode === 8) {
        this.handleDeleteNode(this.focusNode.path)
        this.focusNode = null
      }

      // 添加子节点 - enter
      if (e.keyCode === 13) {
        this.handleAddChildrenNode(this.focusNode.path)
      }

      // 添加兄弟节点 - tab
      if (e.keyCode === 9) {
        this.handleAddBrotherNode(this.focusNode.path)
      }
    },
    handleSetFocusNode(node) {
      this.focusNode = node
    },
    // 增 - 增加兄弟节点
    handleAddBrotherNode(path) {
      let node = getValueFromPath(this._treeData, path.slice(0, -1))
      let addIndex = path[path.length - 1]
      node.splice(addIndex + 1, 0, generateTreeNode('new node'))
      this.makeNewTreeData()
    },
    // 增 - 增加子节点
    handleAddChildrenNode(path) {
      let node = getValueFromPath(this._treeData, path)
      node.children.unshift(generateTreeNode('new node'))
      this.makeNewTreeData()
    },
    // 删
    handleDeleteNode(path) {
      let node = getValueFromPath(this._treeData, path.slice(0, -1))
      let deleteIndex = path[path.length - 1]
      node.splice(deleteIndex, 1)
      this.makeNewTreeData()
    },
    // 改
    handleChangeNode(path, newName) {
      let node = getValueFromPath(this._treeData, path)
      node.name = newName
      this.makeNewTreeData()
    },
    // 选择node
    handleSelectNode(path, selected) {
      let node = getValueFromPath(this._treeData, path)
      setChildrenStatus(node, 'selected', selected) // 设置后代节点
      checkAncestorStatus(this._treeData, path.slice(0, -1), selected) // 检查祖先的选中状态
      this.makeNewTreeData()
    },
    // 折叠 / 展开节点
    handleOpenNode(path) {
      let node = getValueFromPath(this._treeData, path)
      node.state.opened = !node.state.opened
      this.makeNewTreeData()
    }
  }
}
</script>

<style lang="less" scoped>
.vit-wrapper {
  height: 400px;
  width: 100%;
  overflow: scroll;
  border: 1px solid #f67505;
}
</style>
