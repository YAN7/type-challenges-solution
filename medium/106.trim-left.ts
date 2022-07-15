
// * 两个知识点
// * ts类型中也有模板字符串语法
// * 递归

type Space = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Space}${infer Str}` ? TrimLeft<Str> : S

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/106/answer/zh-CN
  > 查看解答：https://tsch.js.org/106/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
