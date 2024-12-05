//imports needed for the project
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Banner from './components/Banner';
import Substance from './components/Substance';
import Bottom from './components/Bottom';

//components will now appear in App.js
function App() {
  return (
      <Router>
        <MenuBar/>
        <Routes>
          <Route path ="/main" element={<Substance/>}/>
          <Route path ="/display" element={<Banner/>}/>
          <Route path ="/generate" element={<Bottom/>}/>
        </Routes>
      </Router>
  );
}

export default App;
