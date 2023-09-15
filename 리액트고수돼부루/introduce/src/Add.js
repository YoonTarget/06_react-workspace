import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = ({onCreate}) => {

    const nameInput = useRef();
    const teameInput = useRef();
    const positionInput = useRef();
    const featureInput = useRef();
    const ageInput = useRef();
    const heightInput = useRef();
    const lastNameInput = useRef();
    const imgInput = useRef();

    const navigate = useNavigate();

    const [state, setState] = useState({

        name : "",
        team : "",
        position : "",
        feature : "",
        age : 0,
        height : 0,
        lastName : "",
        img : ""

    });

    const onChange = (e) => {

        setState({
            ...state,
            [e.target.name] : e.target.value
        });

    }

    const submit = () => {

        onCreate(state.name, state.team, state.position, state.feature, state.age, state.height,
            state.lastName, state.img);

        alert("저장했다잉!!");

        setState({
            name : "",
            team : "",
            position : "",
            feature : "",
            age : 0,
            height : 0,
            lastName : "",
            img : ""
        });

        navigate('/');

    }

    return (

        <div className="Add">
            <h2>선수 입장~!~!</h2>
            <table align="center">
                <tr>
                    <th width={100}>이름</th>
                    <td width={150}><input ref={nameInput} type='text' name='name' value={state.name} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>소속팀</th>
                    <td><input ref={teameInput} type='text' name='team' value={state.team} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>포지션</th>
                    <td><input ref={positionInput} type='text' name='position' value={state.position} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>연애 스타일</th>
                    <td><input ref={featureInput} type='text' name='feature' value={state.feature} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>나이</th>
                    <td><input ref={ageInput} type='number' name='age' value={state.age} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>키</th>
                    <td><input ref={heightInput} type='number' name='height' value={state.height} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>본관</th>
                    <td><input ref={lastNameInput} type='text' name='lastName' value={state.lastName} onChange={onChange}/></td>
                </tr>
                <br/>
                <tr>
                    <th>이미지 주소</th>
                    <td><input ref={imgInput} type='text' name='img' value={state.img} onChange={onChange}/></td>
                </tr>
                <br/>
            </table>
            <Button variant="outlined" onClick={submit}>추가해부루</Button>
            <br/><br/>
        </div>

    )

}

export default Add;