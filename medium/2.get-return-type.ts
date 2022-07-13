
/**
 * *在函数类型中,args表示单个参数,也即是第一个参数
 * *...args表示所有参数组成的数组
 * *不要被args误导了,args可以换成任意变量
 */

type MyReturnType<T> = T extends (...args) => infer R ? R : any

type b = typeof fn

type a = MyReturnType<typeof fn1>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2/answer
  > View solutions: https://tsch.js.org/2/solutions
  > More Challenges: https://tsch.js.org
*/

