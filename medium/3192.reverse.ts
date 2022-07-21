// * 这么简单的递归你应该想到的

/* _____________ Your Code Here _____________ */

type Reverse<T> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<Reverse<[]>, []>>,
	Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
	Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3192/answer
  > View solutions: https://tsch.js.org/3192/solutions
  > More Challenges: https://tsch.js.org
*/
