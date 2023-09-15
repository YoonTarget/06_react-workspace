import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [data, setData] = useState([
    
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to={"/"} className='left'>List</Link>
        <Link to={"/add"} className='right'>Add New Movie</Link>
        <Routes>
          <Route path='/' element={
            <List data={data} setData={setData}/>
          }/>
           <Route path='/add' element={
            <Add data={data} setData={setData}/>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function List ({data, setData}) {

  return (

    <div className='List'>
      <h1>Movies</h1>
      <table align='center'>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Action</th>
        </tr>
        {
          data.map((it, idx) => (
            // <Movie it={it}/>
            <tr>
              <td>{it.id}</td>
              <td>{it.title}</td>
              <td>{it.genre}</td>
              <td>{it.releaseDate}</td>
              <td><button onClick={() => {
                let copy = [...data];
                copy.splice(idx, 1);

                setData(copy);
              }}>Delete</button></td>
            </tr>
          ))
        }
      </table>
    </div>

  )

}

// function Movie ({it}) {

//   <tr>
//     <td>{it.id}</td>
//     <td>{it.title}</td>
//     <td>{it.genre}</td>
//     <td>{it.releaseDate}</td>
//     <td><button>Delete</button></td>
//   </tr>

// }

function Add ({data, setData}) {

  const dataId = useRef(1);
  
  const [newData, setNewData] = useState(
    {
      id : "",
      title : "",
      genre : "",
      date : "",
    }
    );
    
  const navigate = useNavigate();

  return (

    <div className='Add'>
      <h1>Create Movie</h1>
      <div>
        <input 
          type='text' 
          placeholder='Input movie id'
          ref={dataId}
          value={newData.id}
          onChange={(e) => {

            setNewData({...newData, id : e.target.value});

            console.log(newData);

          }}
        />
      </div>
      <div>
        <input 
          type='text' 
          placeholder='Input movie title'
          required
          name='title'
          value={newData.title}
          onChange={(e) => {

            setNewData({...newData, title : e.target.value});

            console.log(newData);

          }}
        />
      </div>
      <div>
        <input 
          type='text' 
          placeholder ='Input movie genre'
          required
          name='genre'
          value={newData.genre}
          onChange={(e) => {

            setNewData({...newData, genre : e.target.value});

            console.log(newData);

          }}
        />
      </div>
      <div>
        출시일 :
        <input 
          type='date'
          required
          name='releaseDate'
          value={newData.releaseDate}
          onChange={(e) => {

            setNewData({...newData, releaseDate : e.target.value});

            console.log(newData);

          }}
        />
      </div>
      <button onClick={() => {

        dataId.current += 1;

        let copy = [...data, newData];

        setData(copy);

        setNewData("");

        navigate('/');

      }}>Add Movie</button>
    </div>

  )

}

export default App;
