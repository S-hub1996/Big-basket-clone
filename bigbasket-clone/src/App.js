import { Header } from "./Components/Header & Footer/Header/Header";
import { Footer } from "./Components/Header & Footer/Footer/Footer";
import { Routers } from "./Routers/Routers";
// import { ProductSlider } from "./Components/Home/Slider/ProductSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer/>
    </div>
  );
}

export default App;
