/*
  11 - 元组转换为对象
  -------
  传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
  
  例如：
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
*/


type TupleToObject<T extends readonly any[]> = {
	[key in T[number]]:  key
}

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const


/**
 * 类型解析
 * * 分解typeof tuple[number]
 * * 首先ts中的typeof是将数据对象转化为类型,因为用了as const,变成了只读的,
 * * 所以typeof tuple的类型也是固定且唯一的,就是['tesla', 'model 3', 'model X', 'model Y']
 * * 然后typeof tuple是一个数组,所以在后面加个[number],就是获取该数组的所有元素的联合类型 "tesla" | "model 3" | "model X" | "model Y"
 * * 然后使用in关键字遍历类型类型,key就表示T[number]中的任意一个,就成功啦.
 */

type a = typeof tuple[number]

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]
