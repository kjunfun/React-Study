import "./App.css";
import Header from "./components/Header"; //es모듈 시스템 관례
import Main from "./components/Main";
import Footer from "./components/Footer";

//App Component (함수 컴포넌트 형태)
function App() {
  return (
    <>
      {/* 부모 component: App, 자식 component: Header, Main, Footer 등 */}
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
