/**
 * todo 看不懂...
 */

/* _____________ Your Code Here _____________ */

type KebabCase<S extends string> = S extends `${infer H}${infer R}`
	? R extends Uncapitalize<R> // H 为最后一个字符时此判断条件将成立，因此会有 '-' 添加在最后
		? `${Lowercase<H>}${KebabCase<R>}`
		: `${Lowercase<H>}-${KebabCase<R>}`
	: S;

type a = KebabCase<'FooBarBaz'>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
	Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
	Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
	Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
	Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
	Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
	Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
	Expect<Equal<KebabCase<'-'>, '-'>>,
	Expect<Equal<KebabCase<''>, ''>>,
	Expect<Equal<KebabCase<'😎'>, '😎'>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
