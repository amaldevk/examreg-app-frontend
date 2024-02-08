import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavExam from './components/NavExam';
import AddStudent from './components/AddStudent';
import ViewStudent from './components/ViewStudent';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {<NavExam/>} />
      <Route path='/add' element = {<AddStudent/>}/>
      <Route path='/view' element = {<ViewStudent/>}/>
      <Route path='/search' element = {<SearchStudent/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
