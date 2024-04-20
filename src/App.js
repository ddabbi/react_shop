import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Nav, Navbar,Button,Row,Col} from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
// 자바스크립트 파일은 확장자명생략
//import {num1,num2,num3} from './data'

//이미지 사용하려면 import
//import main from './img/banner.jpg';

function App() {
  //css 제공 사이트: bootstrap
  //npm install react-bootstrap bootstrap
  let [items, setItems] = useState(data);
  let [photo, setPhoto] = useState(['./img/1.png','./img/1.png','./img/1.png']);


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  
      <div className='main-bg'></div>
      <Container>
        <Row>
          <ItemCol data={data[0]} img={'./img/1.png'}/>
          <ItemCol data={data[1]} img={'./img/1.png'}/>
          <ItemCol data={data[2]} img={'./img/1.png'}/>
        </Row>
      </Container>


        <Button variant="primary" size="lg">
          Large button
        </Button>{' '}
    </div>
  );
}

export default App;

//컴포넌트 맨 앞글자는 대문자
//return에 html(jsx) 코드
function ItemCol(props){
  return(
    <>
      <Col>
          <img src={'./img/1.png'} width={'200px'} height={'200px'}/>
          <h4>{props.data.title}</h4>
          <p>{props.data.price}원</p>
      </Col>
    </>
  )
}
