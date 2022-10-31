import { Start } from "./components/Start";
import { Contents } from "../src/components/Contents";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Start />} />
          <Route path={`/contents`} element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
