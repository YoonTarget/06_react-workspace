/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 돈까스 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [date] = useState(['9월 11일', '9월 12일', '9월 13일']);
  let [입력값, 입력값변경] = useState('');

  // [1,2,3].map(function(a) {
  //   return '123131';  
  // })

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'green', fontSize : '20px'}}>블로그임</h4>
      </div>
      <button onClick={ () => { 

        let copy = [...글제목];
        copy[0] = '여자 코트 추천';

        글제목변경(copy);

       } }>버튼</button>

      <button onClick={ () => {

        let copy = [...글제목];
        copy.sort();

        글제목변경(copy);

       } }>가나다순 정렬</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ () => { setModal(!modal) } }>{글제목[2]}</h4>
        <p>9월 11일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i) { // a : 값 자체, i : 인덱스
          return (
            <div className="list">
              <h4 onClick={ () => 
              { 

                setModal(!modal);

                setIndex(i);

              } }>{글제목[i]} <span onClick={ (e) => 
                { 
                  e.stopPropagation(); // 상위 html로 퍼지는 이벤트 버블링을 막는 코드

                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;

                  따봉변경(copy); 
                
                } }>👍</span> {따봉[i]} 
                <button onClick={ (e) => { 

                  // 내 코드

                  // e.stopPropagation();

                  // let copyy = [...글제목];
                  // copyy.splice(i, 1);

                  // 글제목변경(copyy);

                  
                  // 선생님 코드

                  let copy = [...index];
                  copy.splice(i, 1);

                  setIndex(copy);

                 } }>삭제</button> </h4>
              <p>{date[i]} 발행</p>
            </div>
          )
        })
      }

      <input onChange={(e) => { 
        입력값변경(e.target.value); 
        console.log(입력값);
        }} />

      <button onClick={ () => { 

        // let copy = [입력값, ...글제목];

        let copy = [...글제목];
        copy.unshift(입력값);

        글제목변경(copy);

       } }>글추가</button>  

      {
        modal == true ? <Modal color={'yellow'} 글제목={글제목} 글제목변경={글제목변경} index={index} date={date}/> : null
      }

    </div>
  );

}

function Modal(props) {

  return(

    <>
      <div className='modal'>
        <h4>{props.글제목[props.index]}</h4>
        <p>{props.date[props.index]} 발행</p>
        <p>상세내용</p>
        <button onClick={ () => 
        { 

          let copy = [...props.글제목];
          copy[props.index] = '여자 코트 추천';

          props.글제목변경(copy);

        } }>글수정</button>
      </div><div></div>
    </>
    
  );

}

function Nav() {

  return(

    <div className='nav'>
      <h4>하이하이</h4>
    </div>

  )

}

export default App;

/*
  * JSX 문법 특징
  1. class 속성 부여할 때는 className으로 부여할 것!!
  2. 변수 넣을 때는 {중괄호}
  3. style 속성 부여할 때는 style={{스타일명 : '값'}} 로 표현할 것
  4. 이벤트 핸들러 달 때는 안에 함수 이름을 넣어야한다

  * state 만드는 법
  1. import{useState}
  2. useState(보관할 자료)
  3. let [작명, 작명]
    > 첫번째 : state에 보관했던 자료 나옴
    > 두번째 : state 변경 함수

  * state 사용 이유
    > 일반변수 : 변경되면 html 자동 랜더링 안됨
    > state : 변경되면 html 자동 랜더링 됨
    
  * state는 언제 쓰나
    > 변동시 자동으로 html에 반영되게 만들고 싶다면
      state 사용할 것!!  

  * state 변경하는 법
    > state 변경함수(새로운 state의 값)        
  
  * state 변경함수 특징
    > 기존 state  == 신규 state의 경우 변경 안해줌

  * array / object 특징
    > array / object 담은 변수에는 주소값만 저장됨

  * 컴포넌트 만드는 법
  1. function 만들고
  2. return () 안에 html 담기
  3. <함수명></함수명> 쓰기   

  * 컴포넌트로 만들면 좋은 것
  1. 반복적인 html 축약할 때
  2. 큰 페이지들
  3. 자주 변경되는 것들

  * 컴포넌트의 단점
  1. state 가져다 쓸 때 문제가 생김

  * 동적인 UI 만드는 방법
  1. HTML, CSS로 미리 디자인 완성
  2. UI의 현재 상태를 state로 저장
  3. state에 따라 UI가 어떻게 보일지 작성

  * map 함수 특징
  1. array 자료 개수만큼 함수 안의 코드를 실행해준다.
  2. 함수의 파라미터는 array 안에 있던 자료임
  3. return 문에 값을 적으면 array에 담아줌

  * map 함수 특징2 (state와 함께 썼을 때)
  1. 왼쪽에 array 자료만큼 내부코드 실행해줌
  2. return (html 코드) => html 코드를 array로 담아줌
  3. 유용한 파라미터 2개 사용 가능

  부모 -> 자식 state 전송하는 법
  1. <자식컴포넌트 작명 = {state 이름}>
  2. props 파라미터 등록
  3. props.작명 사용

*/
