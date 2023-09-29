import Button from '@mui/material/Button';

const Edit = ({player, origin, setOrigin, onEdit, handleEdit}) => {

    return (

        <>
        <div>
            <img src={player.img} width={500}/>
        </div>
        <br/>
        <table border={1} align="center">
            <tr>
                <th width={200}>이름</th>
                <td width={300}>{player.name}</td>
            </tr>
            <tr>
                <th>소속팀</th>
                <td><input type='text' name='team' value={origin} onChange={(e) => { setOrigin(e.target.value) }}/></td>
            </tr>
            <tr>
                <th>포지션</th>
                <td>{player.position}</td>
            </tr>
            <tr>
                <th>연애 스타일</th>
                <td>{player.feature}</td>
            </tr>
            <tr>
                <th>나이</th>
                <td>{player.age}살</td>
            </tr>
            <tr>
                <th>키</th>
                <td>{player.height}cm</td>
            </tr>
            <tr>
                <th>본관</th>
                <td>{player.lastName}</td>
            </tr>
        </table>
        <br/>
        <Button variant="outlined" onClick={onEdit(player.id, origin)}>수정완료해부루</Button>
        <Button variant="outlined" color="error" onClick={ handleEdit }>돌아가부루</Button>
        </>

    )

}

export default Edit;