import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './pages/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
