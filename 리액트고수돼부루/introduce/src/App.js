import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './Navbar';
import BasicGrid from './Grid';
import { useRef, useState } from 'react';
import Data from './Data';

function App() {

  const [data, setData] = useState(Data);

  const dataId = useRef(1);

  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar/>
        <h1>축구선수 이상형 월드컵</h1>
        <p>당신의 선택은????</p>
      </div>
      <BasicGrid data={data}/>
      {/* <Button variant="outlined">Outlined</Button> */}
    </BrowserRouter>
  );
}

export default App;
