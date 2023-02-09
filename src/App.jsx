import MyPage from "./components/Mypage";
import CrudApi from "./components/CrudApi";
import MyPageContext from "./components/MypageContext";
import { CrudProvider } from "./context/CrudContext";
import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h1>React reducer</h1>
      <hr />
      <Contador />
      <hr />
      <h1>React context api</h1>
      <a
        href="https://es.reactjs.org/docs/context"
        target="_blank"
        rel="noreferrer"
      ></a>
      <h3>Documentacion</h3>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MyPage />
      <hr />
      <MyPageContext />
    </div>
  );
}

export default App;
