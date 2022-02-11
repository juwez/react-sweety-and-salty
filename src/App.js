import './App.css';
import Header from './components/Header.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/HomePage';
import CreateMenu from './pages/CreateMenuPage';
import Menu from './pages/MenuPage';
import PriceList from './pages/PriceListPage';

function App() {
  return (
    <div className="App">
          <Router>
      <Header />
      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exaxt path="/menu/create" element={<CreateMenu />} />
      <Route exact path="/menu/show" element={<Menu />} />
      <Route exact path="/price" element={<PriceList />} />
          </Routes>
    </Router>
    </div>
    
  );
}

export default App;
