import "./App.css";
import Banner from "./components/Banner";
import Banner3 from "./components/Banner3";
import BAnnerTwo from "./components/BAnnerTwo";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Menus/>
        <Banner/>
        <BAnnerTwo/>
        <Banner3/>
      </main>
    </>
  );
}

export default App;
