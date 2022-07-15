// * 关键点 TrimLeft<TrimRight<S>>先去掉右边空格再去掉左边空格

type Space = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Space}${infer Str}` ? TrimLeft<Str> : S
type TrimRight<S extends string> = S extends `${infer Str3}${Space}` ? TrimRight<Str3> : S

type Trim<S extends string> = TrimLeft<TrimRight<S>>

// * 牛逼解法
type Trim1<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S
		
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/108/answer
  > View solutions: https://tsch.js.org/108/solutions
  > More Challenges: https://tsch.js.org
*/

