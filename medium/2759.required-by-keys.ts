// your answers
type Merge<T> = {
	[K in keyof T]: T[K];
};
type RequiredByKeys<T, K = keyof T> = Merge<T & Required<Pick<T, K & keyof T>>>;
// type RequiredByKeys<T, K> = K extends keyof T ? Required<{ [key in K]: T[key] }> : null;

type a = RequiredByKeys<User, 'name' | 'unknown'>;

type b = Required<User>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface User {
	name?: string;
	age?: number;
	address?: string;
}

interface UserRequiredName {
	name: string;
	age?: number;
	address?: string;
}

interface UserRequiredNameAndAge {
	name: string;
	age: number;
	address?: string;
}

type cases = [
	Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
	Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
	Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
	Expect<Equal<RequiredByKeys<User>, Required<User>>>
];

/* _____________ Further Steps _____________ */
/*
> Share your solutions: https://tsch.js.org/2759/answer
> View solutions: https://tsch.js.org/2759/solutions
> More Challenges: https://tsch.js.org
*/
