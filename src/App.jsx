import "./App.css";
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
      </main>
    </>
  );
}

export default App;
