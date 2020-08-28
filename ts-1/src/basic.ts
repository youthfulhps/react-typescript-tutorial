// 타입스크립트 CLI 를 통해 코드를 컴파일, tsc
// 로컬로 설치한 타입스크립트를 사용하고자 한다면,
// yarn add typescript,
// package.json에 script build 추가

//====================================================
//==================== Basic Type ====================
//====================================================

let count = 0;
count += 1;
// count = "What?"; Error, count 할당 단계에서 Number 타입

const bool: boolean = true;

const numbers: number[] = [1, 2, 3, 4, 5];
const message: string[] = ["Hello", "TypeScript"];

// message.push(1); 에러, push하고자 하는 배열의 요소가 String

let strOrUndef: String | undefined = undefined;
let numOrNull: Number | null = null;

let color: "white" | "black" | "red" = "white";
color = "black";
// color = "green"; Error, 할당 가능한 값의 한정

//=======================================================
//==================== Function Type ====================
//=======================================================

//함수 입력값의 타입, 반환값의 타입을 지정

function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);

function sumArr(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArr([1, 2, 3, 4, 5]);

//==========================================================
//==================== Obejct Interface ====================
//==========================================================

interface Person {
  name: string;
  age?: number; //?가 붙으면 선언해도, 안해도 상관X
}

// interface Developer {
//   name: String;
//   age?: number;
//   skills: String[];
// }

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "Yu",
  age: 27,
};

const developer: Developer = {
  name: "Yu",
  skills: ["js", "ts", "react"],
};

const people: Person[] = [person, developer];

//=========================================================
//==================== Class Interface ====================
//=========================================================

//interface, 클래스나 객체의 타입을 지정할 때 사용되는 문법

interface shape {
  getArea(): number; //Shape interface에는 반드시 getArea라는 함수를 선언해야 하며, 반환값은 number 타입
}

class Circle implements shape {
  //implements는 interface의 조건을 충족시키겠다는 의미
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: shape[] = [new Circle(5), new Rectangle(2, 4)];

shapes.forEach((shape) => console.log(shape.getArea()));

//=====================================================
//==================== Type Alias =====================
//=====================================================

//특정 타입에 별칭을 붙이는 용도로, 그 어떤 타입 모두 별칭을 지어줄 수 있다.

type Person2 = {
  name: string;
  age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.

type Developer2 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: "Yu",
};

const developer2: Developer2 = {
  name: "Yu",
  age: 27,
  skills: ["js", "ts", "react"],
};

type People2 = Person2[];
const people2: People2 = [person2, developer2];

type Color2 = "white" | "black" | "red";
const color2: Color2 = "white";
const colors2: Color2[] = ["black", "red"];

//type, interface 역할 흡사, 일관성있게 사용하는 것을 추천

//=====================================================
//==================== Generics =======================
//=====================================================

//함수, 클래스, interface, type을 사용할 때, 여러 종류의 타입에 대하여,
//호환을 맞춰주어야 하는 상황에서 사용

//두 객체를 합쳐주는 함수를 작성할 때, 어떤 타입의 객체가 들어올 지 모르기 때문에,
//any로 설정을 하였고, 이는 타입 추론이 께진 상태이다.
//이런 경우 제네릭을 사용하면 된다.

function merge(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });

//<T> 와 같이 꺽쇠안에 타입 이름을 넣어 사용하면, 제네릭에 포함된 해당되는 타입은 무엇이든 다 가능하며,
//타입이 깨지지 않는다.
//즉, 다양한 타입을 입력 받을 수 있게 되면서, 타입 추론이 깨지는 것을 막을 수 있다.

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

//===================================================================
//==================== Generics with Interface ======================
//===================================================================

//아래와 같이 Items 타입을 지니고 있는 객체의 리스트 배열의 타입이 동적으로 설정될 수 있다.

interface Items<T> {
  list: T[];
}

const stringItems: Items<string> = {
  list: ["pencil", "pen"],
};

const numberItems: Items<number> = {
  list: [1, 2, 3],
};

//=========================================================================
//==================== Generics with Type Alias ===========================
//=========================================================================

type Items2<T> = {
  list: T[];
};

const stringItems2: Items2<string> = {
  list: ["pencil", "pen"],
};

const numberItems2: Items2<number> = {
  list: [1, 2, 3],
};

//====================================================================
//==================== Generics with Class ===========================
//====================================================================

class Queue<T> {
  list: T[] = [];

  getLength() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue1 = new Queue<number>();
queue1.enqueue(0);
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());

const queue2 = new Queue<string>();
