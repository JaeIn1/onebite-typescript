// unknown 타입
function UnknownType() {
    // 모든 타입이 들어갈 수 있는 이유
    // 가장 최상단의 부모 타입이기 때문
    // 업캐스팅이 모두 가능하다.
    let a = 1;
    let b = true;
    let c = true;
    let d = "fasfs";
    let e = undefined;
    // 당연히 오류 발생
    // 부모 타입을 자식 타입에 넣을 수 없기 때문
    // 다운 캐스팅은 안된다.
    //   let unknownVar: unknown;
    //   let num: number = unknownVar;
}
export {};
