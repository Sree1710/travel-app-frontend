import logo from './logo.svg';
import './App.css';
import AddTourPack from './Components/AddTourPack';
import ViewTourPack from './Components/ViewTourPack';
import SearchTourPack from './Components/SearchTourPack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/addt' exact element={<AddTourPack/>}/>
        <Route path='/viewt' exact element={<ViewTourPack/>}/>
        <Route path='/searcht' exact element={<SearchTourPack/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
