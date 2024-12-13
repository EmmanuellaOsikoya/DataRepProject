//imports needed for the project
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Substance from './components/Substance';
import Display from './components/Display';
import AddARecipe from './components/AddARecipe';
import Change from './components/Change';

//components will now appear in App.js
function App() {
  return (
      <Router>
        <MenuBar/>
        <Routes>
          <Route path ="/" element={<Substance/>}/>
          <Route path ="/display" element={<Display/>}/>
          <Route path ="/add" element={<AddARecipe/>}/>
          <Route path="/change/:id" element={<Change/>}/>
        </Routes>
      </Router>
  );
}

export default App;
