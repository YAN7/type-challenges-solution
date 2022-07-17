/**
 * *精华在于 ${Left}${To}${ReplaceAll<Right, From, To>} 
 * *而这句代码的精华又在于它是将原始字符串S从左到右一个个替换From为To的
 */

// * 我的解法,有缺陷,缺陷在于这句ReplaceAll<`${Left}${To}${Right}`每次都会从头开始匹配整个字符串
type ReplaceAll1<S extends string, From extends string, To extends string> = From extends '' ? S : 
	S extends `${infer Left}${From}${infer Right}` ? ReplaceAll<`${Left}${To}${Right}`, From, To> : S

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : 
S extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${ReplaceAll<Right, From, To>}` : S

type a = ReplaceAll<'foobarfoobar', 'ob', 'b'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]



/* _____________ Further Steps _____________ */
/*
> Share your solutions: https://tsch.js.org/119/answer
> View solutions: https://tsch.js.org/119/solutions
> More Challenges: https://tsch.js.org
*/

