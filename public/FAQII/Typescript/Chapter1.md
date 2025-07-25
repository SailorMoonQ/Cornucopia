# TypeScript Chapter 1

### 1. What is a generic function?

Generic function is a way to write code that type flexible without using "any,"
(Means you don't have to write separate functions for each type).
When you need a function to support or work with different types, or you don't know
the type already, you will only know the type when you use this function.

```typescript
function myNewFunction<T>(param: T) {
    return "string" as T;
}

// right
const result = myNewFunction<number>(1)

// wrong
const result1 = myNewFunction<number>('string')

```

### 2. What is as const?

Basically, a const is a sealed object that cannot be modified. But in JavaScript,
even if it's a constant, someone could go in and modify its property or reassign it.
Now with "as const," every nested property will also be immutable.

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

In JavaScript, it could freeze an object at **first level** and it works at runtime.
It still can modify nested property.

```javascript
Object.freeze({ host: '127.0.0.1' })
```

### 3. What does the private access modifier do when added to a class variable/method?

The private access modifier restricts access to class member from the outside.

### 4. What is a decorator in TypeScript and when would you use a decorator? Provide any examples?

Decorator is a way to reuse code following the created pattern;
 basically, we just wrap a certain function or class with some code
that we add some share functionality. There are lots of uses in angular.
It can modify the constructor or apply some changes, and we can reuse this
and apply it as many classes as we want. Without using inheritance, it won't
violate the Liskov principle, and it won't have a very long prototype chain.

```typescript
function Injectable() {}

@Injuetable
class someService {
    constructor() {
        this.hi = 'hi';
    }
}

```

### 5. What is the difference between type and interface in TypeScript?

In most part, we can interchange the type and interface. The most suggested way to use
is to use types to define your domain entities.
The key difference is that at build time, interfaces are merged, which means you can
have the same interface declared in many parts of the code, and it will get merged at
build time. Whereas types are unique and it's singular. It will get an error when two
types have the same name.

### 6. What is a type guard in TypeScript?

A type guard in TypeScript is a function that tells you whether a union type is of a certain type.
And you can write a custom type guard function to tell you the specific type is.

### 7. How is structural typing different from nominal typing? And which typing is actually implemented in TypeScript?

TypeScript actually implements the structural typing.
Structural typing means that if two objects have the same property, then TypeScript
considers them the same thing.
Nominal typing means that for something to be of a certain type,
it has to match the same signature, like java, C#.

