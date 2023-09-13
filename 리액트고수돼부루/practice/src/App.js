import logo from './logo.svg';
import './App.css';
import PlayerList from './PlayerList';
import { useRef, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const dataNo = useRef(1);

  const onCreate = (name, team, position, feature) => {
    const newPlayer = {
      name,
      team,
      position,
      feature,
      no : dataNo.current
    };
    dataNo.current += 1;

    setData(...data, newPlayer);
  }

  const onDelete = (targetNo) => {
    const newPlayerList = data.filter((pl) => pl.no !== targetNo);

    setData(newPlayerList);
  }

  return (
    <div className="App">
      <h1>축구 선수 순위 매기기</h1>
        <PlayerList data={data} onDelete={onDelete}/>
    </div>
  );
}

export default App;
