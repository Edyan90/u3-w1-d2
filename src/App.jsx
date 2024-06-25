import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import AllTheBooks from "./Components/AllTheBooks";

function App() {
  return (
    <div className="">
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <Welcome></Welcome>
        <AllTheBooks
          opzione1="fantasy"
          opzione2="history"
          opzione3="horror"
          opzione4="romance"
          opzione5="scifi"
        ></AllTheBooks>
      </main>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
