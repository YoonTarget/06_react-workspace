import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id : 1,
//     author : "윤관현",
//     content : "하일하일",
//     emotion : 5,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 2,
//     author : "김상호",
//     content : "하이하이",
//     emotion : 5,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 3,
//     author : "홍상원",
//     content : "하삼하삼",
//     emotion : 5,
//     created_date : new Date().getTime()
//   }
// ];

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    };
    dataId.current += 1;

    setData([newItem, ...data]);
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제됐습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);

    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onDelete={onDelete}/>
    </div>
  );
}

export default App;
