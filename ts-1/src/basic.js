"use strict";
// 타입스크립트 CLI 를 통해 코드를 컴파일, tsc
// 로컬로 설치한 타입스크립트를 사용하고자 한다면,
// yarn add typescript,
// package.json에 script build 추가
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//====================================================
//==================== Basic Type ====================
//====================================================
var count = 0;
count += 1;
// count = "What?"; Error, count 할당 단계에서 Number 타입
var bool = true;
var numbers = [1, 2, 3, 4, 5];
var message = ["Hello", "TypeScript"];
// message.push(1); 에러, push하고자 하는 배열의 요소가 String
var strOrUndef = undefined;
var numOrNull = null;
var color = "white";
color = "black";
// color = "green"; Error, 할당 가능한 값의 한정
//=======================================================
//==================== Function Type ====================
//=======================================================
//함수 입력값의 타입, 반환값의 타입을 지정
function sum(a, b) {
    return a + b;
}
sum(1, 2);
function sumArr(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArr([1, 2, 3, 4, 5]);
var person = {
    name: "Yu",
    age: 27,
};
var developer = {
    name: "Yu",
    skills: ["js", "ts", "react"],
};
var people = [person, developer];
var Circle = /** @class */ (function () {
    //implements는 interface의 조건을 충족시키겠다는 의미
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(2, 4)];
shapes.forEach(function (shape) { return console.log(shape.getArea()); });
var person2 = {
    name: "Yu",
};
var developer2 = {
    name: "Yu",
    age: 27,
    skills: ["js", "ts", "react"],
};
var people2 = [person2, developer2];
var color2 = "white";
var colors2 = ["black", "red"];
//type, interface 역할 흡사, 일관성있게 사용하는 것을 추천
//=====================================================
//==================== Generics =======================
//=====================================================
//함수, 클래스, interface, type을 사용할 때, 여러 종류의 타입에 대하여,
//호환을 맞춰주어야 하는 상황에서 사용
//두 객체를 합쳐주는 함수를 작성할 때, 어떤 타입의 객체가 들어올 지 모르기 때문에,
//any로 설정을 하였고, 이는 타입 추론이 께진 상태이다.
//이런 경우 제네릭을 사용하면 된다.
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 2 });
//<T> 와 같이 꺽쇠안에 타입 이름을 넣어 사용하면, 제네릭에 포함된 해당되는 타입은 무엇이든 다 가능하며,
//타입이 깨지지 않는다.
//즉, 다양한 타입을 입력 받을 수 있게 되면서, 타입 추론이 깨지는 것을 막을 수 있다.
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap(10);
var stringItems = {
    list: ["pencil", "pen"],
};
var numberItems = {
    list: [1, 2, 3],
};
var stringItems2 = {
    list: ["pencil", "pen"],
};
var numberItems2 = {
    list: [1, 2, 3],
};
//====================================================================
//==================== Generics with Class ===========================
//====================================================================
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Queue.prototype.getLength = function () {
        return this.list.length;
    };
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue1 = new Queue();
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
var queue2 = new Queue();
