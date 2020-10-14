// import randomCName from 'chinese-random-name'

/**
 * 根据路径数据path，从obj取出对应值
 * @param {*} obj
 * @param {array} path
 */
export const getValueFromPath = (obj, path) => {
  let result = obj
  path.forEach(item => {
    result = result[item]
  })
  return result
}

/**
 * 把tree json对象解析深度优先解析成数组
 * @param {array} treeJson
 */
export const treeJson2List = treeJson => {
  let startTime = Date.now()
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
  console.log('treeJson2List', ' cost: ', Date.now() - startTime, 'ms')
  return treeList
}

/**
 * 将obj的子节点的state.attr设置为value
 * @param {*} obj
 * @param {*} attr
 * @param {*} value
 */
export const setChildrenStatus = (obj, attr, value) => {
  let startTime = Date.now()
  obj.state[attr] = value
  if (obj.children.length > 0) {
    obj.children.forEach(item => {
      setChildrenStatus(item, attr, value)
    })
  }
  console.log('setChildrenStatus', ' cost: ', Date.now() - startTime, 'ms')
}

/**
 * 更改祖先节点的选中状态
 * @param {*} obj
 * @param {*} path
 * @param {*} value
 */
export const checkAncestorStatus = (obj, path, value) => {
  let startTime = Date.now()
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
  console.log('checkAncestorStatus', ' cost: ', Date.now() - startTime, 'ms')
}
