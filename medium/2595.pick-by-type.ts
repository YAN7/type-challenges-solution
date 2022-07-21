/**
 * 使用as断言key 使其符合某个范围
 */

/* _____________ Your Code Here _____________ */

type PickByType<T, U> = {
	[key in keyof T as T[key] extends U ? key : never]: T[key];
};

type a = PickByType<Model, boolean>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
	name: string;
	count: number;
	isReadonly: boolean;
	isEnable: boolean;
}

type cases = [
	Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
	Expect<Equal<PickByType<Model, string>, { name: string }>>,
	Expect<Equal<PickByType<Model, number>, { count: number }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2595/answer
  > View solutions: https://tsch.js.org/2595/solutions
  > More Challenges: https://tsch.js.org
*/
