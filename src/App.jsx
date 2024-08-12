import "./App.css";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus/>
        <Banner/>
      </main>
    </>
  );
}

export default App;
