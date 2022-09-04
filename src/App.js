import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Dash from "./pages/Dash";

function App() {
  return (
    <Routes>
      <Route element={<Protected />}>
        <Route path="/dash-board" element={<Dash />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route exact path="/registration" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );

}

export default App;
