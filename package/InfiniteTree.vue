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
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDragDrop"
    >
      <tree-node
        v-for="(node, index) in shouldRenderNodeList"
        :key="node.id"
        :index="renderNodePosRange[0] + index"
        :treeNode="node"
        :tabSize="tabSize"
        :translateY="(renderNodePosRange[0] + index) * treeNodeHeight"
        :isNodeFocus="focusNode && node.id === focusNode.id"
        :isDragOver="node.id === dragOverNodeId && node.id !== dragNodeInfo.id"
        :onNodeContentDragStart="onNodeContentDragStart"
        :onNodeContentDragEnd="onNodeContentDragEnd"
        v-bind="{ checkable }"
        @setFocusNode="handleSetFocusNode"
        @vit-changeNode="handleChangeNode"
        @vit-selectNode="handleSelectNode"
        @vit-openNode="handleOpenNode"
      />
      <div
        ref="vit-drop-indicator"
        class="vit__drop-indicator"
        v-show="showDropIndicator"
      />
    </div>
  </div>
</template>

<script>
import './styles/index.scss'
import TreeNode from './TreeNode'
import treeUtils from './utils'
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
    },
    // 默认展开所有树节点
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    // 默认展开的树节点keys
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    },
    // 默认选中复选框的树节点keys
    defaultCheckedKeys: {
      type: Array,
      default: () => []
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
      treeNodeHeight: 28, // 树节点高度
      dragResult: null,
      dragNodeInfo: null
    }
  },
  computed: {
    // vit节点总数：渲染 + 未渲染
    totalNodeNum() {
      return this.totalNodeList.length
    },
    dragOverNodeId() {
      return this.dragResult && this.dragResult.type === 1
        ? this.totalNodeList[this.dragResult.data].id
        : null
    },
    showDropIndicator() {
      return this.dragResult && this.dragResult.type === 2 ? true : false
    }
  },
  watch: {
    value: {
      // deep: true,
      immediate: true,
      handler(newValue) {
        if (!newValue?.[1]?.state) {
          treeUtils.initNodeInnerState(newValue, {
            defaultExpandAll: this.defaultExpandAll,
            defaultExpandedKeys: this.defaultExpandedKeys,
            defaultCheckedKeys: this.defaultCheckedKeys
          })
          this._treeData = newValue
          this.makeNewTreeData()
        } else {
          this._treeData = newValue
        }
        this.totalNodeList = treeUtils.treeJson2List(this._treeData)
        this.computeShouldRenderNodeList()
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
    // 触发input事件
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
      let node = treeUtils.getValueFromPath(this._treeData, path.slice(0, -1))
      let addIndex = path[path.length - 1]
      node.splice(
        addIndex + 1,
        0,
        generateTreeNode({ name: 'new node', needAddState: true })
      )
      this.makeNewTreeData()
    },
    // 增 - 增加子节点
    handleAddChildrenNode(path) {
      let node = treeUtils.getValueFromPath(this._treeData, path)
      node.children.unshift(
        generateTreeNode({ name: 'new node', needAddState: true })
      )
      this.makeNewTreeData()
    },
    // 删
    handleDeleteNode(path) {
      let node = treeUtils.getValueFromPath(this._treeData, path.slice(0, -1))
      let deleteIndex = path[path.length - 1]
      node.splice(deleteIndex, 1)
      this.makeNewTreeData()
    },
    // 改
    handleChangeNode(path, newName) {
      let node = treeUtils.getValueFromPath(this._treeData, path)
      node.name = newName
      this.makeNewTreeData()
    },
    // 选择node
    handleSelectNode(path, selected) {
      let node = treeUtils.getValueFromPath(this._treeData, path)
      treeUtils.setChildrenStatus(node, 'selected', selected) // 设置后代节点
      treeUtils.checkAncestorStatus(this._treeData, path.slice(0, -1), selected) // 检查祖先的选中状态
      this.makeNewTreeData()
    },
    // 折叠 / 展开节点
    handleOpenNode(path, options) {
      let node = treeUtils.getValueFromPath(this._treeData, path)
      node.state.opened = options ? options.opened : !node.state.opened
      this.makeNewTreeData()
    },
    onNodeContentDragStart(id, index) {
      this.dragNodeInfo = { id, index }
      this.handleOpenNode(this.totalNodeList[index].path, { opened: false })
    },
    onNodeContentDragEnd() {
      this.dragNodeInfo = null
    },
    // 响应节点拖拽
    onDragOver(e) {
      e.preventDefault()
      const dragType = treeUtils.computeDragType(
        { x: e.layerX, y: e.layerY },
        this.renderNodePosRange,
        this.totalNodeList,
        new Array(this.totalNodeList.length).fill(this.treeNodeHeight),
        this.tabSize
      )
      if (dragType.type === 2) {
        this.$refs['vit-drop-indicator'].style.top = dragType.data.top + 'px'
        this.$refs['vit-drop-indicator'].style.left = dragType.data.left + 'px'
      }
      this.dragResult = dragType
    },
    onDragLeave(e) {
      this.dragResult = null
    },
    onDragDrop(e) {
      if (
        this.dragResult.type === 1 &&
        this.dragOverNodeId !== this.dragNodeInfo.id
      ) {
        let dragOverNodePath = this.totalNodeList[this.dragResult.data].path,
          dragOverNode = treeUtils.getValueFromPath(
            this._treeData,
            dragOverNodePath
          )
        let dragNodePath = this.totalNodeList[this.dragNodeInfo.index].path,
          dragNode = treeUtils.getValueFromPath(this._treeData, dragNodePath),
          dragNodeParent = treeUtils.getValueFromPath(
            this._treeData,
            dragNodePath.slice(0, -1)
          )

        // 删除拖拽节点
        let deleteIndex = dragNodePath[dragNodePath.length - 1]
        dragNodeParent.splice(deleteIndex, 1)
        // 将拖拽节点加入到新的节点中
        if (!dragOverNode.children) {
          dragOverNode.children = []
        }
        dragOverNode.children.push(dragNode)
        dragOverNode.state.opened = true
        this.makeNewTreeData()
      } else if (
        this.dragResult.type === 2 &&
        this.totalNodeList[this.dragResult.data.targetIndex].id !==
          this.dragNodeInfo.id
      ) {
        let dragRelativeNodePath = this.totalNodeList[
            this.dragResult.data.targetIndex
          ].path,
          dragRelativeNodeParent = treeUtils.getValueFromPath(
            this._treeData,
            dragRelativeNodePath.slice(0, -1)
          )
        let dragNodePath = this.totalNodeList[this.dragNodeInfo.index].path,
          dragNode = treeUtils.getValueFromPath(this._treeData, dragNodePath),
          dragNodeParent = treeUtils.getValueFromPath(
            this._treeData,
            dragNodePath.slice(0, -1)
          )

        // dragNodeParent.splice(deleteIndex, 1)
        // 将拖拽节点加入到新的节点的相对位置
        let relativeIndex =
          dragRelativeNodePath[dragRelativeNodePath.length - 1]
        if (this.dragResult.data.opt === 'above') {
          dragRelativeNodeParent.splice(relativeIndex, 0, dragNode)
          // debugger
        } else {
          dragRelativeNodeParent.splice(relativeIndex + 1, 0, dragNode)
          // debugger
        }
        // 删除拖拽节点
        let deleteIndex = dragNodePath[dragNodePath.length - 1]
        if (
          dragNodeParent === dragRelativeNodeParent &&
          deleteIndex > relativeIndex
        ) {
          dragNodeParent.splice(deleteIndex + 1, 1)
        } else {
          dragNodeParent.splice(deleteIndex, 1)
        }
        this.makeNewTreeData()
      }

      this.dragResult = null
    }
  }
}
</script>
