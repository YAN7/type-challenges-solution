/* _____________ Your Code Here _____________ */

type EndsWith<T extends string, U extends string> = T extends `${infer F}${U}` ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
	Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
	Expect<Equal<EndsWith<'abc', 'd'>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2693/answer
  > View solutions: https://tsch.js.org/2693/solutions
  > More Challenges: https://tsch.js.org
*/
