import styles from "./assets/css/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Routes>
          <Route path="/:agentName/:agentId" element={<Register />} />
          <Route path="/success" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
