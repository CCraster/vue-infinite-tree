import uuidv4 from 'uuid'

/**
 *
 * @param {object} options name hasState
 */
export const generateTreeNode = (options = {}) => {
  let node = {
    id: uuidv4(),
    name: options.name || Math.random(0, 255),
    children: []
  }
  if (options.hasState) {
    node.state = {
      opened: true,
      disabled: false,
      selected: false
    }
  }
  return node
}

/**
 * fake Tree Json数据，只有2层
 * @param {number} num_l1 一级节点个数
 * @param {number} num_l2_max 二级节点最大个数
 */
export const fakeTreeJsonData = (num_l1, num_l2_max) => {
  let startTime = Date.now()
  let treeJson = []

  for (let i = 0; i < num_l1; i++) {
    let random = Math.floor(Math.random() * (num_l2_max + 1))
    let tempNode = generateTreeNode()
    tempNode.children = new Array(random).fill(0).map(() => {
      return generateTreeNode()
    })
    treeJson.push(tempNode)
  }
  console.log('fakeTreeJsonData', ' cost: ', Date.now() - startTime, 'ms')

  return treeJson
}

/**
 * mock tree data V2
 * @param {number} total 节点总个数
 * @param {number} maxLevel 最大层数
 */
export const fakeTreeJsonDataV2 = (total, maxLevel) => {
  let startTime = Date.now()
  let treeJson = []

  while (total > 0) {
    const hasChildren = Math.random() > 0.7
    if (hasChildren) {
      const root = generateTreeNode()
      let level = Math.floor(Math.random() * maxLevel) + 1 // 节点层数
      let currentTarget = root.children
      level = level > total ? total : level
      for (let i = level - 1; i > 0; i--) {
        let tempNode = generateTreeNode()
        currentTarget.push(tempNode)
        currentTarget = tempNode.children
      }
      treeJson.push(root)
      total -= level
    } else {
      treeJson.push(generateTreeNode())
      total -= 1
    }
  }

  console.log('fakeTreeJsonDataV2', ' cost: ', Date.now() - startTime, 'ms')
  return treeJson
}
