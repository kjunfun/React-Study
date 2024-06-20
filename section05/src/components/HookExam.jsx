import useInput from "../hooks/useInput";

// 1.훅은 반드시 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2.훅은 조건문, 반복문 내부에서 호출될 수 없다.
// 3.커스텀 훅을 직접 만들 수 있다.

// const state = useState(); 1번 에러상황 예시

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <div>
        <input value={input} onChange={onChange} />
      </div>
      <div>
        <input value={input2} onChange={onChange2} />
      </div>
    </div>
  );
};

export default HookExam;
