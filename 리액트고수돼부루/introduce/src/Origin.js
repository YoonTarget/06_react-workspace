import Button from '@mui/material/Button';

const Origin = ({player, handleEdit, handleRemove}) => {

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
                <td>{player.team}</td>
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
        <Button variant="outlined" onClick={handleEdit}>수정해부루</Button>
        <Button variant="outlined" color="error" onClick={handleRemove}>삭제해부루</Button>
        </>

    )

}

export default Origin;