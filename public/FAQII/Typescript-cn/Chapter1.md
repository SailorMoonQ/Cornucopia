# TypeScript Chapter 1

### 1. 什么是泛型函数？

泛型函数是一种可以在使用时(或者叫延迟传递)用参数化的类型传递给函数，
在调用时根据实际参数类型动态推断具体类型的函数。同时避免了防止报错使用"any"。
当需要一个函数支持多种类型，或者是在声明的时候不确定类型,使用参数化类型来占位。

```typescript
function myNewFunction<T>(param: T) {
    return "string" as T;
}

// right
const result = myNewFunction<number>(1)

// wrong
const result1 = myNewFunction<number>('string')

```

### 2. 什么是"as const"?

在JS中，一个对象常量或者是数组常量包含嵌套的对象，嵌套的部分仍然可以修改。
这时可以通过声明"as const"，是编译器知道这个常量不管哪个层级都不可以被
修改。如果有修改，可以在编译阶段发现错误并进行改正。同时也可以避免被外界
污染。

```typescript
// without "as const"
const config = {
    host: '127.0.0.1',
    port: '8080'
}

config.host = '1'; // It works

// With "as const"
const config2 = {
    host: '127.0.0.1',
    port: '8080',
    auth: {
        client: 'blablabla'
    }
} as const

config2.auth.client = '1'; // It pops up an error

```

在JS中可以使用Object.freeze冻结 **第一层** 的属性.但依然可以修改
嵌套层级。

```javascript
Object.freeze({ host: '127.0.0.1' })
```

### 3. "Private"访问修饰符是做什么的？在什么时候加在一个对象的属性或者方法上？

"Private"修饰符是用来限制从外部对对象内部的私有属性或方法的访问。比如有一些私有的属性，计数器，config这些
在创建对象的时候会被内部逻辑用到，又不希望被篡改的属性。

### 4. Typescript中的装饰器是什么？怎么用它？简单举个例子。

装饰器（Decorators）是一种特殊类型的声明，它可以被附加到类声明、方法、访问符、属性或参数上。
装饰器使用`@expression`这种形式，其中`expression`求值后必须是一个函数，它会在运行时被调用，
被装饰的声明信息作为参数传入。例如Angular中有很多使用，比如@Input, @Injectable。装饰器无需
通过继承来使新创建的类具有相同的功能，可以避免违反Liskov原则，避免过长的原型链。

```typescript
function Injectable() {}

@Injuetable
class someService {
    constructor() {
        this.hi = 'hi';
    }
}

```

### 5. Typescript中Type和Interface的区别

大多数情况，type和interface可以互换通用。更推荐的方式用type去定义值，类有明确标识的这种。
俩者最主要的不同是在编译阶段，interface会合并，就是说可以在代码任意位置去定义同名的interface，最终
都会合并成同一个。Type是唯一的，且是单例，如果出现同名的type会报错。

### 6. 什么是类型守护？

在TypeScript中，类型守护（Type Guards）是一种表达式，用于在特定的作用域（比如条件语句块）中确保某
个变量属于特定的类型。它可以帮助TypeScript编译器更好地推断类型，从而减少编译时错误，并提供更准确的代
码补全和类型检查。

常见的类型守护方式：
1. **`typeof` 类型守护**：用于基本数据类型（如`string`, `number`, `boolean`, `symbol`等）。
2. **`instanceof` 类型守护**：用于检查一个对象是否是某个类的实例。
3. **`in` 操作符类型守护**：用于检查对象是否具有某个属性。
4. **自定义类型守护函数**：通过定义一个返回类型为类型谓词（`parameterName is Type`）的函数来实现。

### 7. 结构类型系统(structural typing)与具名类型系统(nominal typing)有什么区别？TS中用的是哪种？

TypeScript 使用的是结构类型系统。
具名类型系统即使两个类型的结构完全相同，只要类型名不同，他们就是俩个不一样的。
结构类型系统只要一个类型（A）包含另一个类型（B）的所有成员（属性和方法），则 A 可赋值给 B，无论类型名是否相同。
TypeScript 严格采用结构类型系统，其核心思想是 “鸭子类型”, 这样做可以减少冗余类型声明，提升代码复用性

