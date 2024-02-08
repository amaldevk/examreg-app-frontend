import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavExam from './components/NavExam';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {<NavExam/>} />
      <Route path='/add' element = {<AddStudent/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
