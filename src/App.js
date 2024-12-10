//imports needed for the project
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Banner from './components/Banner';
import Substance from './components/Substance';
import Bottom from './components/Bottom';
import Display from './components/Display';
import AddARecipe from './components/AddARecipe';

//components will now appear in App.js
function App() {
  return (
      <Router>
        <MenuBar/>
        <Routes>
          <Route path ="/" element={<Substance/>}/>
          <Route path ="/display" element={<Display/>}/>
          <Route path ="/add" element={<AddARecipe/>}/>
        </Routes>
      </Router>
  );
}

export default App;
