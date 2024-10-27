let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello1", "hello2", "hello3"];

let booArr1: boolean[] = [true, false, true];
let booArr2: Array<boolean> = [true, false, true]; // 제네릭 문법

// 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: (string | number)[][] = [
  [1, "S", 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열

let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
