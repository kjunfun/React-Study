// 객체 구조 분해 할당 기법
import mul, { add, sub } from "./math.js";
// 라이브러리를 가져올 땐 파일 경로가 아닌 해당 라이브러리 이름만 적으면 됨.
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
