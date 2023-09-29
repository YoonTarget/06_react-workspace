import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Origin from "./Origin";
import Edit from "./Edit";

const Detail = ({data, onEdit, onRemove}) => {

    const {id} = useParams();

    const player = data[id - 1];

    const navigate = useNavigate();

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
                    <Origin player={player} handleEdit={handleEdit} handleRemove={handleRemove}/>
                    </>
                )
                 : 
                (
                    <>
                    <Edit player={player} origin={origin} setOrigin={setOrigin} onEdit={onEdit} handleEdit={handleEdit}/>
                    </>
                )
            }
            
        </div>

    )

}

export default Detail;