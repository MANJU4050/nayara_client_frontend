import styles from "./assets/css/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Success from "./components/Success";
function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Routes>
          <Route path="/:agentName/:agentId" element={<Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
