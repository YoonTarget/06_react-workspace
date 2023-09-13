import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {

    // console.log(diaryList);

    return (

        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    // diaryList.map( (it, idx) => {
                    //     return()
                    // } )

                    diaryList.map( (it, idx) => (
                        <DiaryItem key={it.id} {...it} {...idx} onDelete={onDelete}/>
                    ))
                }
            </div>
        </div>

    )

}
console.log("까꿍")
DiaryList.defaultProps = {
    diaryList : []
}

export default DiaryList;