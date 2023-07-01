import "./App.css";
import { useMagicColor } from "./hooks/useMagicColor";

function App() {
  const color = useMagicColor();

  return (
    <div className="App">
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: color,
          borderRadius: "100%",
        }}
      ></div>
    </div>
  );
}

export default App;
