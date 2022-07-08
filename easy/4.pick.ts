/**
 * * keyof 遍历某种类型的属性，并通过keyof操作符提取其属性的名称
 * * extends 1. 表示继承/拓展的含义 2. 表示约束的含义 3. 表示分配的含义
 * * ts中的[]表示该类型是一个整体
 */

type MyPick<T, K extends keyof T> = {
	[key in K]: T[key]
}

type tt = 'title' | 'completed' | 'invalid'

type a = keyof tt

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/
