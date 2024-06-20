import { useState } from "react";

// 3번 예시: useInput() 커스텀 훅
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
