const Friend = ({name, hobby, birth, no, onDelete}) => {

    return (

        <tr className="Friend">
            <td>{no}</td>
            <td>{name}</td>
            <td>{hobby}</td>
            <td>{birth}</td>
            <td><button onClick={ () => { 
                if(window.confirm(`${no}번 친구를 삭제하시겠습니까?`)) {
                    onDelete(no);
                }
            } }>삭제</button></td>
        </tr>

    )

};

export default Friend;