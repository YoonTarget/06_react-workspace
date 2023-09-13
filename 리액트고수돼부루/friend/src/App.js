import logo from './logo.svg';
import './App.css';
import Friend from './Friend.js';
import { useRef, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FriendEditor from './FriendEditor.js';
import FriendList from './FriendList';

function App() {

  let [data, setData] = useState([]);

  let dataNo = useRef(1);

  let onCreate = (name, hobby, birth) => {

    let newFriend = {
      name,
      hobby,
      birth,
      no : dataNo.current
    }
    dataNo.current += 1;

    setData([...data, newFriend]);

  }

  let onDelete = (targetNo) => {

    let newFriendList = data.filter((fr) => fr.no !== targetNo);

    setData(newFriendList);

  }

  return (
    <div className="App">

      <h3>내짝꿍</h3>

      <Link to="/addFriend">친구 추가하기</Link>
      <span> / </span>
      <Link to="/">메인으로 가기</Link>

      <Routes>
        <Route path='/' element={

          <FriendList FriendList={data} onDelete={onDelete}/>

        }></Route>
        <Route path='/addFriend' element={

          <FriendEditor onCreate={onCreate}/>

        }></Route>
      </Routes>
    </div>
  );
}

export default App;
