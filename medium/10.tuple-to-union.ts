type TupleToUnion<T extends any[]> = T[number]


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/10/answer
  > View solutions: https://tsch.js.org/10/solutions
  > More Challenges: https://tsch.js.org
*/

