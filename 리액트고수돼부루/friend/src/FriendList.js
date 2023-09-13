import Friend from "./Friend";

const FriendList = ({onDelete, FriendList}) => {

    return (

        <div className="FriendList">
            <h4>친구 목록</h4>
            <h5>{FriendList.length}명의 친구가 있습니다.</h5>

            <table align='center'>
            <thead>
              <tr>
                <th width="50">번호</th>
                <th width="50">이름</th>
                <th width="50">취미</th>
                <th width="100">생일</th>
                <th width="50">기타</th>
              </tr>
            </thead>
            <tbody>
                {
                    FriendList.map( (fr, idx) => (
                        <Friend key={fr.no} {...fr} onDelete={onDelete}/>
                    ) )
                }
            </tbody>
          </table>

        </div>

    )

}

FriendList.defaultProps = {
    FriendList : []
}

export default FriendList;