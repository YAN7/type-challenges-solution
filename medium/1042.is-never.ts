// * 又是巧妙的转换类型,之前有一题是将数组用`${T}`转换为字符串的,现在这题是用[T]转换为数组

type IsNever<T> = [T] extends [never] ? true : false;

type a = IsNever<''>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<IsNever<never>, true>>,
	Expect<Equal<IsNever<never | string>, false>>,
	Expect<Equal<IsNever<''>, false>>,
	Expect<Equal<IsNever<undefined>, false>>,
	Expect<Equal<IsNever<null>, false>>,
	Expect<Equal<IsNever<[]>, false>>,
	Expect<Equal<IsNever<{}>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1042/answer
  > View solutions: https://tsch.js.org/1042/solutions
  > More Challenges: https://tsch.js.org
*/
