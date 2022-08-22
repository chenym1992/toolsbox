import { arrayToTree, average, sum, uniq } from '../src'

describe('【Array Funtions Api】', () => {
  test('#1 sum', () => {
    expect(sum([1, 2, 3, 4])).toBe(10)
  })
  test('#2 average', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5)
  })
  test('#3 uniq', () => {
    expect(uniq([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4])
  })
  test('#4 arrayToTree', () => {
    const array = [
      { id: 1, name: '部门1', pid: 0 },
      { id: 2, name: '部门2', pid: 1 },
      { id: 3, name: '部门3', pid: 1 },
      { id: 4, name: '部门4', pid: 3 },
      { id: 5, name: '部门5', pid: 4 }
    ]
    expect(arrayToTree(array)).toEqual([
      {
        id: 1,
        name: '部门1',
        pid: 0,
        children: [
          { id: 2, name: '部门2', pid: 1, children: [] },
          {
            id: 3,
            name: '部门3',
            pid: 1,
            children: [
              {
                id: 4,
                name: '部门4',
                pid: 3,
                children: [{ id: 5, name: '部门5', pid: 4, children: [] }]
              }
            ]
          }
        ]
      }
    ])
  })
  test('#5 arrayToTree with options', () => {
    const array = [
      { sid: 1, name: '部门1', psid: 0 },
      { sid: 2, name: '部门2', psid: 1 },
      { sid: 3, name: '部门3', psid: 1 },
      { sid: 4, name: '部门4', psid: 3 },
      { sid: 5, name: '部门5', psid: 4 }
    ]
    expect(
      arrayToTree(array, { id: 'sid', pid: 'psid', children: 'child' })
    ).toEqual([
      {
        sid: 1,
        name: '部门1',
        psid: 0,
        child: [
          { sid: 2, name: '部门2', psid: 1, child: [] },
          {
            sid: 3,
            name: '部门3',
            psid: 1,
            child: [
              {
                sid: 4,
                name: '部门4',
                psid: 3,
                child: [{ sid: 5, name: '部门5', psid: 4, child: [] }]
              }
            ]
          }
        ]
      }
    ])
  })
})
