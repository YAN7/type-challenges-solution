/**
 * * readonly 前面还能加个-转成非已读的,666啊
 */

/* _____________ Your Code Here _____________ */

type Mutable<T> = {
	-readonly [key in keyof T]: T[key];
};

type a = Readonly<Todo1>;
type b = Mutable<Readonly<Todo1>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Todo1 {
	title: string;
	description: string;
	completed: boolean;
	meta: {
		author: string;
	};
}

type List = [1, 2, 3];

type cases = [Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>, Expect<Equal<Mutable<Readonly<List>>, List>>];

type errors = [
	// @ts-expect-error
	Mutable<'string'>,
	// @ts-expect-error
	Mutable<0>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2793/answer
  > View solutions: https://tsch.js.org/2793/solutions
  > More Challenges: https://tsch.js.org
*/
