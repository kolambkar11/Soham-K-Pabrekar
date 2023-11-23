import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./component/main/Main";
import Notfound from "./component/notfound/Notfound";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route activeClassName="active_class" exact path="/soham-k-pabrekar" element={<Main />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
