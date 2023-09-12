import logo from './logo.svg';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {

  let [friends, setFriends] = useState(data);

  let [inputs, setInputs] = useState({
    no : '',
    name : '',
    hobby : '',
    birth : ''
  });

  let {no, name, hobby, birth} = inputs;

  let onChange = ( (e) => { 

    let {name, value} = e.target;

    console.log(name);
    console.log(value);

    setInputs({
      ...inputs,
      [name] : value
    });

   } );

   let navigate = useNavigate();

  return (
    <div className="App">

      <h3>내짝꿍</h3>

      <Link to="/addFriend">친구 추가하기</Link>
      <span> / </span>
      <Link to="/">메인으로 가기</Link>

      <Routes>
      <Route path='/' element={

        <table align='center'>
        <thead>
          <tr>
            <th width="50">번호</th>
            <th width="50">이름</th>
            <th width="50">취미</th>
            <th width="100">생일</th>
            <th width="50">기타</th>
          </tr>
        </thead>
        <tbody>
          {
            friends.map( (a, i) => {

              let test = "test";

              return (

                <Friend test={test} a={a} friends={friends} i={i} setFriends={setFriends}/>

              )

            } )
          }
        </tbody>
        </table>

      }></Route>
      <Route path='/addFriend' element={

      <>  

        <div>친구 추가</div>

        번호 : <input type='number' name='no' onChange={onChange} value={no}/> <br/>
        이름 : <input type='text' name='name' onChange={onChange} value={name}/> <br/>
        취미 : <input type='text' name='hobby' onChange={onChange} value={hobby}/> <br/>
        생일 : <input type='date' name='birth' onChange={onChange} value={birth}/> <br/>
        <button onClick={ () => { 

          let copy = [...friends, inputs];

          setFriends(copy);

          setInputs({no:'', name:'', hobby:'', birth:''});

          // 홈으로 가기
          // navigate('/');

          // 뒤로가기
          navigate(-1);

         } }>추가</button>

      </>  

      }></Route>
      </Routes>
    </div>
  );
}

// Friend 컴포넌트
function Friend(props) {

  return (

    <tr>
      <td>{props.friends[props.i].no}</td>
      <td>{props.friends[props.i].name}</td>
      <td>{props.friends[props.i].hobby}</td>
      <td>{props.friends[props.i].birth}</td>
      <td><button onClick={ () => { 

        console.log(props.test);
        console.log(props.i);
        console.log(props.a);

        console.log(props.friends);

        let copy = [...props.friends];

        copy.splice(props.i, 1);

        console.log(copy);

        props.setFriends(copy);

       } }>삭제</button></td>
    </tr>

  )

}

export default App;
