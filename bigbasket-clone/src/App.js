import {Header} from "./Components/Header & Footer/Header/Header";
import { Footer } from "./Components/Header & Footer/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      {/* <Home /> */}

      <Footer />
    </div>
  );
}

export default App;
