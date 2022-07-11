

/**
 * * T extends U, T 如果是联合类型,T中的所有的类型会依次执行T extends U,再将结果重新组合成一个联合类型
 */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/

