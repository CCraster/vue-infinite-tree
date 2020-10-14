import uuidv4 from 'uuid'

export const generateTreeNode = name => {
  return {
    id: uuidv4(),
    name: name || Math.random(0, 255),
    state: {
      opened: true,
      disabled: false,
      selected: false
    },
    children: []
  }
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
