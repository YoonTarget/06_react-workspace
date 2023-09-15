import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Origin from "./Origin";
import Edit from "./Edit";

const Detail = ({data, onEdit, onRemove, navigate}) => {

    const {id} = useParams();

    const player = data[id - 1];

    const handleRemove = () => {
        if(window.confirm(`기호 ${id}번 선수를 참말로 삭제할껴??`)) {
            onRemove(player.id);

            navigate('/');
        }
    }

    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const [origin, setOrigin] = useState(player.team);

    console.log(id);

    return (

        <div className="Detail">

            {
                edit == false ? 
                (  
                    <>
                    <Origin player={player}/>
                    <Button variant="outlined" onClick={handleEdit}>수정해부루</Button>
                    <Button variant="outlined" color="error" onClick={handleRemove}>삭제해부루</Button>
                    </>
                )
                 : 
                (
                    <>
                    <Edit player={player} origin={origin} setOrigin={setOrigin}/>
                    <Button variant="outlined" onClick={handleEdit}>수정완료해부루</Button>
                    <Button variant="outlined" color="error" onClick={() => { navigate(-1) }}>돌아가부루</Button>
                    </>
                )
            }
            
        </div>

    )

}

export default Detail;