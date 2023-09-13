import { useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const FriendEditor = ({onCreate}) => {

    const [state, setState] = useState({
        name : "",
        hobby : "",
        birth : ""
    });

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    let navigate = useNavigate();

    const onClick = () => {
        onCreate(state.name, state.hobby, state.birth);

        alert("친구 추가 성공!!");

        setState({
            name : "",
            hobby : "",
            birth : ""
        });

        // 홈으로 가기
        navigate('/');
        
        // 뒤로가기
        // navigate(-1);

    }

    return (

        <div className="FriendEditor">

            {/* <>   */}

            <h4>친구 추가</h4>

            <div>
                이름 : 
                <input 
                    type='text' 
                    name='name' 
                    value={state.name}
                    onChange={onChange} 
                />
            </div>
            <div>
                취미 : 
                <input 
                    type='text' 
                    name='hobby' 
                    value={state.hobby}
                    onChange={onChange} 
                />
            </div>
            <div>
                생일 : 
                <input 
                    type='date' 
                    name='birth' 
                    value={state.birth}
                    onChange={onChange} 
                />
            </div>
            <div>
                <button onClick={onClick}>친구 추가</button>
            </div>

            {/* </>   */}

        </div>

    )


}

export default FriendEditor;


