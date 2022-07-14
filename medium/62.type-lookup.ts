// * 要依次对联合类型进行判断,必须要使用T extends
type LookUp1<T, V> = T extends {type: string} ?  T['type'] extends V ? T : never : never

// * 高级解法

type LookUp<T, V> = T extends {type: V} ? T : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type a = LookUp<Animal, 'dog'>

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/62/answer/zh-CN
  > 查看解答：https://tsch.js.org/62/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

