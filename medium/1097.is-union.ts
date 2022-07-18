/* _____________ Your Code Here _____________ */

type IsUnion<T> = any;

type a = string | number;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<IsUnion<string>, false>>,
	Expect<Equal<IsUnion<string | number>, true>>,
	Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
	Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
	Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
	Expect<Equal<IsUnion<{ a: string | number }>, false>>,
	Expect<Equal<IsUnion<[string | number]>, false>>,
	// Cases where T resolves to a non-union type.
	Expect<Equal<IsUnion<string | never>, false>>,
	Expect<Equal<IsUnion<string | unknown>, false>>,
	Expect<Equal<IsUnion<string | any>, false>>,
	Expect<Equal<IsUnion<string | 'a'>, false>>,
	Expect<Equal<IsUnion<never>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/
