/**
 * ['tesla', 'model 3', 'model X', 'model Y'] 是一个常量,传入[number]就解构出一个个类型来了
 */

/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = {
	[key in T[number]]: key
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type a = typeof tuple[number]

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/11/answer
  > View solutions: https://tsch.js.org/11/solutions
  > More Challenges: https://tsch.js.org
*/

