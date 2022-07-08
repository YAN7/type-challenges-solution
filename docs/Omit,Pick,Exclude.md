/**
 * * Omit,Pick,Exclude的区别与用法
 * * Omit和Pick才是一对的,两者作用互斥
 * * 
 */

 # Omit,Pick,Exclude的区别与用法

## Omit和Pick才是一对的,两者作用互斥,

Omit<T, K extends string | number | symbol>: 从对象类型T中排除K属性之后的对象类型
Pick<T, K extends keyof T>, 从对象类型中获取K属性之后的对象类型
Exclude<T, K> 从联合类型中排除K属性之后的联合类型

type Person = {
	name: string;
	age: string;
	location: string;
};


```ts
// type omit = {
// 	name: string;
// 	age: string;
// }
type omit = Omit<Person, 'location'>

// type pick = {
// 	location: string;
// }
type pick = Pick<Person, 'location'>

// type exclude = "name" | "age"
type exclude = Exclude<keyof Person, 'location'>
```
