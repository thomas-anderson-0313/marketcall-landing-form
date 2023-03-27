import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import Third_EN from './pages/engmed';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/engmed1" element = {<Third_EN />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
