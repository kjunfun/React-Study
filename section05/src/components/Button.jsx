// props 객체 구조 분해 할당 적용
const Button = ({ text, color = "black", children }) => {
  //이벤트 객체
  const handleClick = (e) => {
    console.log(e);
    console.log(text);
  };
  // const handleMouseEnter = () => {
  //   console.log("Mouse entered:", text);
  // };

  return (
    <button
      //이벤트 핸들러: 이벤트를 실질적으로 처리하는 함수.
      ///이벤트 핸들러를 설정할 때, 함수를 호출하는 식으로 ()를 붙이는 것이 아니라, 콜백함수를 전달하듯이 이름만 이벤트 핸들러로 설정.
      onClick={handleClick}
      // onMouseEnter={handleMouseEnter}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// Button.defaultProps = {
//   color: "black",
// };

export default Button;
