import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].price);

  return (
    <div className="App">
      <>

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">알뜰교통카드</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>      
      <Nav.Link href="/detail">Cart</Nav.Link>
    </Nav>
  </Navbar>

  <Link to="/">홈</Link>
  <Link to="/detail">상세페이지</Link>

  <Routes>
    <Route path='/' element=
    {

      <>

      <div>메인페이지임</div>

      <div className='main-bg'></div>

      <Container>
        <Row>
          {
            shoes.map((a, i) => {

              console.log("하이룽 오늘 점심 뭐먹 나는 김밥먹ㅋ");
              
              return (
                <Card shoes={shoes[i]} i={i + 1}></Card>
              )

            })
          }
        </Row>
      </Container>

      </>

    }>

    </Route>
    <Route path="/detail" element={<div>상세페이지임</div>}/>
    <Route path="/about" element={<div>어바웃페이지임</div>}/>
    <Route/>
  </Routes>

  {/* <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}></div> */}

</>

      {/* <Button variant="primary">Primary</Button>{' '} */}
    </div>
  );
}

// 컴포넌트 만들기

function Card(props) {

  return (

    <Col sm>
      <img src={'https://lovesykkkk.github.io/shoes' + props.i + '.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </Col>

  )

}

export default App;
