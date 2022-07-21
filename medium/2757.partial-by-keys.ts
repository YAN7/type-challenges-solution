/**
 * * 又学到了一招,就是怎么合并两个对象
 */

type Merge<T> = {
	[K in keyof T]: T[K];
};

type PartialByKeys<T, U extends PropertyKey = keyof T> = Merge<Partial<T> & Omit<T, U>>;

type a = PartialByKeys<User, 'name'>;

// type a1 = Partial<>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface User {
	name: string;
	age: number;
	address: string;
}

interface UserPartialName {
	name?: string;
	age: number;
	address: string;
}

interface UserPartialNameAndAge {
	name?: string;
	age?: number;
	address: string;
}

type cases = [
	Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
	Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
	Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
	Expect<Equal<PartialByKeys<User>, Partial<User>>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2757/answer
  > View solutions: https://tsch.js.org/2757/solutions
  > More Challenges: https://tsch.js.org
*/
