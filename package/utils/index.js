// import randomCName from 'chinese-random-name'

const evaluateFunctionRunningTime = fn => {
  return (...args) => {
    let startTime = Date.now()
    const result = fn(...args)
    console.log(fn.name, ' cost: ', Date.now() - startTime, 'ms')
    return result
  }
}

/**
 * 根据路径数据path，从obj取出对应值
 * @param {object}  obj 目标对象
 * @param {array}   path 路径数组
 */
const getValueFromPath = (obj, path) => {
  let result = obj
  path.forEach(item => {
    result = result[item]
  })
  return result
}

/**
 * 给每个节点加上内部的state属性
 * @param {array}   tree 未拍平的tree
 * @param {object}  options 选项参数
 * @param {boolean} options.defaultExpandAll 是否默认节点都展开
 * @param {array}   options.defaultExpandedKeys 默认展开的节点keys
 * @param {array}   options.defaultCheckedKeys 默认选中复选框的树节点keys
 */
const initNodeInnerState = (tree, options) => {
  const needSetAncestorOpenedArray = [] // 需要设置祖先节点为展开状态的节点path数组
  const needCheckAncestorAndChildrenSelectedArray = [] // 需要更正祖先和子节点选中状态的节点path数组
  const setAncestorOpened = path => {
    while (path.length > 0) {
      if (path[path.length - 1] === 'children') path.pop()
      let _obj = getValueFromPath(tree, path)
      console.log(_obj, tree, path)
      if (!_obj.state.opened) {
        _obj.state.opened = true
      } else {
        break
      }
      path.pop()
    }
  }
  const setNodeState = (tree, path, options) => {
    tree.forEach((node, index) => {
      const state = {
        disabled: false
      }
      // opened
      if (node.children.length > 0) {
        if (options.defaultExpandAll) {
          state.opened = true
        } else if (options.defaultExpandedKeys.includes(node.id)) {
          state.opened = true
          needSetAncestorOpenedArray.push(path.slice(0, path.length - 1))
        } else {
          state.opened = false
        }
        setNodeState(node.children, [...path, index, 'children'], options)
      } else {
        state.opened = false
      }
      // selected
      if (options.defaultCheckedKeys.includes(node.id)) {
        state.selected = true
        needCheckAncestorAndChildrenSelectedArray.push([...path, index])
      } else {
        state.selected = false
      }

      // add state attr
      if (node.state) {
        console.log(node)
        node.state = { ...node.state, ...state }
      } else {
        node.state = state
      }
    })
  }

  setNodeState(tree, [], options)
  for (let path of needSetAncestorOpenedArray) {
    setAncestorOpened(path)
  }
  for (let path of needCheckAncestorAndChildrenSelectedArray) {
    setChildrenStatus(getValueFromPath(tree, path), 'selected', true)
    checkAncestorStatus(tree, path, true)
  }
}

/**
 * 把tree json对象解析深度优先解析成数组
 * @param {array} treeJson
 */
const treeJson2List = treeJson => {
  let treeList = []
  const getTreeNodeRecursive = (tree, path) => {
    tree.forEach((node, index) => {
      const { id, name, state } = node
      let tempNode = {
        id,
        name,
        state,
        path: [...path, index]
      }
      if (node.children.length > 0 && state.opened) {
        treeList.push(tempNode)
        getTreeNodeRecursive(node.children, [...path, index, 'children'])
      } else if (node.children.length > 0 && !state.opened) {
        treeList.push(tempNode)
      } else {
        treeList.push({ ...tempNode, isLeaf: true })
      }
    })
  }

  getTreeNodeRecursive(treeJson, [])
  return treeList
}

/**
 * 将obj的子节点的state.attr设置为value
 * @param {*} obj 目标对象
 * @param {*} attr 目标属性
 * @param {*} value 需要设定的值
 */
const setChildrenStatus = (obj, attr, value) => {
  obj.state[attr] = value
  if (obj.children.length > 0) {
    obj.children.forEach(item => {
      setChildrenStatus(item, attr, value)
    })
  }
}

/**
 * 更改祖先节点的选中状态
 * @param {*} obj 根对象
 * @param {*} path 起始路径
 * @param {*} value 引起变化的节点当前的值
 */
const checkAncestorStatus = (obj, path, value) => {
  let length = path.length
  for (let i = length; i > 0; i--) {
    let tempNode = getValueFromPath(obj, path.slice(0, i))

    if (Array.isArray(tempNode)) continue

    if (
      tempNode.children[value ? 'every' : 'some'](
        item => item.state.selected === value
      )
    ) {
      tempNode.state.selected = value
    } else {
      break
    }
  }
}

export default {
  getValueFromPath: evaluateFunctionRunningTime(getValueFromPath),
  initNodeInnerState: evaluateFunctionRunningTime(initNodeInnerState),
  treeJson2List: evaluateFunctionRunningTime(treeJson2List),
  setChildrenStatus: evaluateFunctionRunningTime(setChildrenStatus),
  checkAncestorStatus: evaluateFunctionRunningTime(checkAncestorStatus)
}
