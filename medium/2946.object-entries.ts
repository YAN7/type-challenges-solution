type ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, T[U] extends infer Rest | undefined ? Rest : T[U]] : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
	name: string;
	age: number;
	locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type cases = [
	Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
	Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
	Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
	Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2946/answer
  > View solutions: https://tsch.js.org/2946/solutions
  > More Challenges: https://tsch.js.org
*/
