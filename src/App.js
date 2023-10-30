import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element = {<Login/>} />
        <Route path = '/' element = {<Login/>}/>
         <Route path='home' element = {<Home/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
