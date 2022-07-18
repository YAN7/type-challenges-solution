/* _____________ Your Code Here _____________ */

/**
 * * 基本完美答案,多了第一个extends判断
 * * 又是递归
 */

type Flatten<T extends any[]> = T extends [] ? [] : 
	T extends [infer F, ...infer Rest] 
		? F extends any[] 
			? [...Flatten<F>, ...Flatten<Rest>]
			:  [F, ...Flatten<Rest>]
		: []
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/459/answer
  > View solutions: https://tsch.js.org/459/solutions
  > More Challenges: https://tsch.js.org
*/

