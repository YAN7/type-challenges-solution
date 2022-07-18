/* _____________ Your Code Here _____________ */

// * 我的答案
type Diff<O, O1> = {
	[key in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: key extends keyof O ? O[key] : key extends keyof O1 ? O1[key] : never;
};

// * 最简洁(厉害)的答案
type Diff1<O, O1> = Omit<O & O1, keyof (O | O1)>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Foo = {
	name: string;
	age: string;
};
type Bar = {
	name: string;
	age: string;
	gender: number;
};
type Coo = {
	name: string;
	gender: number;
};

type cases = [
	Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
	Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
	Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
	Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
