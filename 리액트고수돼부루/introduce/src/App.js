import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './Navbar';
import BasicGrid from './Grid';
import { useRef, useState } from 'react';
import Data from './Data';
import List from './List';
import Add from './Add';
import Detail from './Detail';

function App() {

  const [data, setData] = useState(Data);

  const dataId = useRef(4);

  const onCreate = (name, team, position, feature, age, height, lastName, img) => {

    const newPlayer = {

      id : dataId.current,
      name,
      team,
      position,
      feature,
      age,
      height,
      lastName,
      img
    }

    dataId.current += 1;

    setData([...data, newPlayer]);

  }

  const onRemove = (targetId) => {

    const newData = data.filter((pl) => pl.id !== targetId);

    setData(newData);

  }

  const onEdit = (targetId, newTeam) => {

    setData(
      data.map((pl) => (
        pl.id === targetId ? {...pl, team : newTeam} : pl
      ))
    );

  }

  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={ <BasicGrid data={data}/> }/>
          <Route path='/List' element={ <List/> }/>
          <Route path='/Add' element={ <Add onCreate={onCreate}/> }/>
          <Route path='/Detail/:id' element={ <Detail data={data} onEdit={onEdit} onRemove={onRemove}/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
