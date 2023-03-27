import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import Third_EN from './pages/engmed';
import Third_SP from './pages/spanmed';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/engmed1" element = {<Third_EN />} />
          <Route path = "/spanmed1" element = {<Third_SP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
