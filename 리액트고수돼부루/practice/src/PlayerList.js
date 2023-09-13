import Player from "./Player";

const PlayerList = ({data, onDelete}) => {

    return (

        <table className='playerList' border={1}>
            <thead>
            <tr>
                <th>순위</th>
                <th>사진</th>
                <th>이름</th>
                <th>소속</th>
                <th>포지션</th>
                <th>특징</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((pl, idx) => {
                        <Player key={pl.no} {...pl} onDelete={onDelete}/>
                    })
                }
            </tbody>
        </table>

        

    )

}

export default PlayerList;