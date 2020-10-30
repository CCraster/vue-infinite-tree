<template>
  <div
    id="vit-wrapper"
    ref="vit-wrapper"
    class="vit-wrapper"
    tabindex="0"
    :style="{}"
    @scroll="onScroll"
  >
    <div
      :style="{
        position: 'relative',
        height: totalNodeList.length * treeNodeHeight + 'px'
      }"
    >
      <tree-node
        v-for="(node, index) in shouldRenderNodeList"
        :key="node.id"
        :treeNode="node"
        :tabSize="tabSize"
        :translateY="(renderNodePosRange[0] + index) * treeNodeHeight"
        :isNodeFocus="focusNode && node.id === focusNode.id"
        v-bind="{ checkable }"
        @setFocusNode="handleSetFocusNode"
        @vit-changeNode="handleChangeNode"
        @vit-selectNode="handleSelectNode"
        @vit-openNode="handleOpenNode"
      />
    </div>
  </div>
</template>

<script>
import './styles/index.scss'
import TreeNode from './TreeNode'
import {
  treeJson2List,
  getValueFromPath,
  setChildrenStatus,
  checkAncestorStatus
} from './utils'
import { generateTreeNode } from '@/utils/dataMock.js'

export default {
  name: 'InfiniteTree',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    // 是否能够复选
    checkable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TreeNode
  },
  data() {
    return {
      shouldRenderNodeList: [], // 需要渲染的节点数组
      renderNodePosRange: [0, 100], // 记录需要渲染的节点的下标最小&最大值
      focusNode: null, // 处于「操作状态」的节点
      tabSize: 24, // tree缩进px
      treeNodeHeight: 28 // 树节点高度
    }
  },
  computed: {
    // vit节点总数：渲染 + 未渲染
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
    this.$refs['vit-wrapper'].addEventListener('keyup', this.handleKeyUp)
    this.$refs['vit-wrapper'].addEventListener('keydown', e => {
      e.preventDefault() // 防止tab键触发默认切换焦点元素动作
    })
  },
  beforeDestroy() {
    this.$refs['vit-wrapper'].removeEventListener('keyup', this.handleKeyUp)
  },
  methods: {
    makeNewTreeData() {
      this._treeData = [...this._treeData]
      this.$emit('input', this._treeData)
    },
    // 判断vit是否处于聚焦状态
    isTreeFocus() {
      return document.activeElement?.id === 'vit-wrapper'
    },
    // vit滚动时计算应该显示的元素下标
    onScroll(e) {
      const config = {
        nodeHeight: this.treeNodeHeight, // 节点高度
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
    // 得出应该渲染的元素数组
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
    // 处理按键事件
    handleKeyUp(e) {
      if (!this.isTreeFocus() || !this.focusNode) return

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
    // 设置当前处于「操作状态」节点
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
