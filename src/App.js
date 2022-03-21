import "./App.css";
import "boxicons";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Homepage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
