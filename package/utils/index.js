// import randomCName from 'chinese-random-name'

const evaluateFunctionRunningTime = (fn, desc) => {
  return (...args) => {
    let startTime = Date.now()
    const result = fn(...args)
    console.log(desc, ' cost: ', Date.now() - startTime, 'ms')
    return result
  }
}

/**
 * 根据路径数据path，从obj取出对应值
 * @param {*} obj
 * @param {array} path
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
 * @param {array} tree 未拍平的tree
 */
const initNodeInnerState = (tree, options) => {
  tree.forEach(node => {
    const state = {
      opened: options.defaultExpandAll ? true : false,
      selected: false,
      disabled: false
    }
    node.state = state
    if (node.children.length > 0) {
      initNodeInnerState(node.children, options)
    }
  })
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
 * @param {*} obj
 * @param {*} attr
 * @param {*} value
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
 * @param {*} obj
 * @param {*} path
 * @param {*} value
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
  getValueFromPath: evaluateFunctionRunningTime(
    getValueFromPath,
    'getValueFromPath'
  ),
  initNodeInnerState: evaluateFunctionRunningTime(
    initNodeInnerState,
    'initNodeInnerState'
  ),
  treeJson2List: evaluateFunctionRunningTime(treeJson2List, 'treeJson2List'),
  setChildrenStatus: evaluateFunctionRunningTime(
    setChildrenStatus,
    'setChildrenStatus'
  ),
  checkAncestorStatus: evaluateFunctionRunningTime(
    checkAncestorStatus,
    'checkAncestorStatus'
  )
}
