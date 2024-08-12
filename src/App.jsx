import "./App.css";
import Banner from "./components/Banner";
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
      </main>
    </>
  );
}

export default App;
