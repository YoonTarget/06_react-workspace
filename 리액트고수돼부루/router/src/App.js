import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <Routes>
          {/* <Route path='/' element={<> <h1>App.js</h1> <Home/> </> }/> */}
          <Route path='/' element={ <Home/> }/>
          <Route path='/new' element={ <New/> }/>
          <Route path='/edit' element={ <Edit/> }/>
          <Route path='/diary' element={ <Diary/> }/>
          <Route path='/diary/:id' element={ <Diary/> }/>
        </Routes>
        <RouteTest/>
        {/* <a href={"/new"}>new로 이동</a> => 이동할 때 화면이 깜빡 거림 => 리액트의 목적에 부합하지 않음 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
