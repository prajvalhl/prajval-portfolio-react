import "./style.css";
import { Main } from "./components/Main";
import { useTheme } from "./theme-context";

function App() {
  const { themePalette } = useTheme();
  return (
    <div className={`App ${themePalette.body}`}>
      <Main />
    </div>
  );
}

export default App;
