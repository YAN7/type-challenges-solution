/* _____________ Your Code Here _____________ */

type OmitByType<T, U> = {
	[key in keyof T as T[key] extends U ? never : key]: T[key];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
	name: string;
	count: number;
	isReadonly: boolean;
	isEnable: boolean;
}

type cases = [
	Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
	Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
	Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2852/answer
  > View solutions: https://tsch.js.org/2852/solutions
  > More Challenges: https://tsch.js.org
*/
