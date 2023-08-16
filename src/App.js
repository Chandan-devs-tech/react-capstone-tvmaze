import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardsContainer from './components/CardsContainer';
import CardDetails from './components/CardDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardsContainer />} />
        <Route path="/details/:id" element={<CardDetails />} />
      </Routes>

    </div>
  );
}

export default App;
