import MyPage from "./components/Mypage";
import CrudApi from "./components/CrudApi";
import MyPageContext from "./components/MypageContext";

function App() {
  return (
    <div>
      <h1>React context api</h1>
      <a
        href="https://es.reactjs.org/docs/context"
        target="_blank"
        rel="noreferrer"
      ></a>
      <h3>Documentacion</h3>
      <hr />
      <CrudApi />
      <hr />
      <MyPage />
      <hr />
      <MyPageContext />
    </div>
  );
}

export default App;
