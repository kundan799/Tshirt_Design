import Conves from "./conves";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Conves/>
      <Customizer/>
    </main>
  );
}

export default App;
