import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavExam from './components/NavExam';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {<NavExam/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
