/* _____________ Your Code Here _____________ */

type TupleToNestedObject<T, U> = T extends [infer F extends PropertyKey, ...infer R] ? {
	[P in F]: TupleToNestedObject<R, U>
} : U

type a = TupleToNestedObject<['a', 'b'], number>;

// type b = a[number];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
	Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
	Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
	Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3188/answer
  > View solutions: https://tsch.js.org/3188/solutions
  > More Challenges: https://tsch.js.org
*/
