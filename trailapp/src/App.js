import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Counter from './counter';
import Timer from "./timer";
import Home from './home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/counter" element={<Counter/>}></Route>
          <Route exact path="/timer" element={<Timer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
