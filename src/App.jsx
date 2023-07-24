import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx"
import Edit from "./pages/Edit.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/createform" element={<Create/>}></Route>
          <Route path="/editform/:id" element={<Edit/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
