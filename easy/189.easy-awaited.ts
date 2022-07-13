/**
 * * 两个关键点
 * * 一个是infer的使用,老生常谈,infer可以推断出extends的任意子类型
 * * 一个是递归,类型自己调用自己,只是要做好判断条件
 */

type MyAwaited<T> = T extends Promise<infer R> 
? R extends Promise<any> ? MyAwaited<R> : R
: any


type a = MyAwaited<Z>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
]

type error = MyAwaited<number>



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/189/answer
  > View solutions: https://tsch.js.org/189/solutions
  > More Challenges: https://tsch.js.org
*/

