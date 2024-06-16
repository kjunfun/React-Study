// JSX 주의 사항
// 1.중괄호 내부에는 JS 표현식만 넣을 수 있다.
///JS 표현식(Expression): 표현식의 결과는 항상 '값'이 됨. ex) '42'(리터럴 값), 'x'(변수), 'a+b'(연산), 'func()'(함수 호출), 'isTrue? 'y' : 'n'(삼항 연산자)
///JS 문법(Statement): 조건, 반복, 함수 선언문 등. 프로그램 흐름을 제어하나, 자체적으로 값을 반환 X
///따라서 조건, 반복문을 쓰고 싶다면 JSX 안에서는 표현식 형태로 변환하여 사용해야 함.
// 2. 숫자, 문자열, 배열 값만 렌더링 됨.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
const Main = () => {
  const number = 7;
  const obj = { a: 6 };

  return (
    <main>
      <img src="" alt="" />
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝" : "홀"}</h2>
      {10}
      {number}
      {[1, 2, 3]}
      {true}
      {null}
      {undefined}
      {obj.a}
    </main>
  );
};

export default Main;
