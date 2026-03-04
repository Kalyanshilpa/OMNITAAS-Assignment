import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;