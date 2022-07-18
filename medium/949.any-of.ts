/**
 * * 没做出来,而这种解法看起来非常美妙
 */

type AnyOf<T extends readonly any[]> = T extends Array<0 | '' | [] | false | { [key in any]: never }> ? false : true;

type a = Array<0>;

const aa: a = [0, 0, 0, 0, 0, 0];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
	Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
	Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
	Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
	Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
	Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
	Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
	Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
	Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
	Expect<Equal<AnyOf<[]>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/
