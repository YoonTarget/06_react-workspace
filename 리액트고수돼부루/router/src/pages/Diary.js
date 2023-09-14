import { useParams } from "react-router-dom";

const Diary = () => {

    // id에 해당하는 숫자를 뽑아줌 => id별로 내용을 달리 채웠을 경우에 호출시, 그 내용을 보여주기에 용이함
    const {id} = useParams();

    console.log(id);

    return (
        <div>
            <h1>Diary</h1>
            <p>이곳은 일기 상세 화면 입니다.</p>
        </div>
    )
}

export default Diary;