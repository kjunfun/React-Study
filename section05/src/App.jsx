import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

//App Component (함수 컴포넌트 형태)
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      {/* 각 개별 요소가 props */}
      {/* JS ES6 문법인 스프레드 연산자(...) 적용하여 Button component의 props로 전달 */}
      <Button {...buttonProps}></Button>
      <Button text={"카페"}></Button>
      <Button text={"블로그"}>
        <Header></Header>
      </Button>
    </>
  );
}

export default App;
