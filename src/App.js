import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Nav, Navbar,Row,Col} from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailPage from './pages/Detail';
//npm install reaact-router-dom@6
// 라우터는 창을 새로 불러오는게 아니라 재렌더링을 함 ==> 빠르다
// <App/> 을 <BrowserRouter></> 로 감싸준다

//이미지 사용하려면 import
//import main from './img/banner.jpg';

function App() {
  //css 제공 사이트: bootstrap
  //npm install react-bootstrap bootstrap
  let [items, setItems] = useState(data);
  let [photo, setPhoto] = useState(['./img/1.png','./img/1.png','./img/1.png']);
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <Container>
              <Row>
              {
                items.map((e, idx) =>{
                  return(
                    <ItemCol data = {data[0]} img={photo[idx]} key={e}/>
                  )
                })
              }
              </Row>
            </Container>
          </>
        }></Route>
        <Route path='/detail' element={<DetailPage items={items} />}></Route>
      </Routes>  
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
