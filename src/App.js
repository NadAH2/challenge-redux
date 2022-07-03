import "./App.css";
import BgColor from "./components/BgColor";
import { useSelector } from "react-redux/es/exports";

function App() {
  const color = useSelector((state) => state.color);
  return (
    <div
      className="App"
      style={{ backgroundColor: color, height: "max-height" }}
    >
      <BgColor />
    </div>
  );
}

export default App;
