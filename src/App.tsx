import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import Fifth_EN from './pages/engmed';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/engmed1" element = {<Fifth_EN />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
