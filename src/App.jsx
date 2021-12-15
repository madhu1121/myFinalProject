import './App.scss';
import Dashboard from './containers/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
