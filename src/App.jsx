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
        <MyNav />
      </header>
      <main>
        <Welcome></Welcome>
        <AllTheBooks />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
