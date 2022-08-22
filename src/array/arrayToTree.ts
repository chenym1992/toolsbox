/**
 * 扁平数据结构转Tree
 * @param items
 * @param options
 * @returns
 */
export function arrayToTree(
  items: Array<Object>,
  options = { id: 'id', pid: 'pid', children: 'children' }
) {
  const { id, pid, children } = options

  const result = [] // 存放结果集
  const itemMap = {} //
  for (const item of items) {
    const idItem = item[id]
    const pidItem = item[pid]

    if (!itemMap[idItem]) {
      itemMap[idItem] = {
        [children]: []
      }
    }

    itemMap[idItem] = {
      ...item,
      [children]: itemMap[idItem][children]
    }

    const treeItem = itemMap[idItem]

    if (!!!pidItem) {
      result.push(treeItem as never)
    } else {
      if (!itemMap[pidItem]) {
        itemMap[pidItem] = {
          [children]: []
        }
      }
      itemMap[pidItem][children].push(treeItem)
    }
  }
  return result
}
