import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {Container,Nav, Navbar,Button} from 'react-bootstrap';
import data from './data';
// 자바스크립트 파일은 확장자명생략
import {num1,num2,num3} from './data'

function App() {
  //css 제공 사이트: bootstrap
  //npm install react-bootstrap bootstrap
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{data}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{num1}</Nav.Link>
            <Nav.Link href="#features">{num2}</Nav.Link>
            <Nav.Link href="#pricing">{num3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        <Button variant="primary" size="lg">
          Large button
        </Button>{' '}
    </div>
  );
}

export default App;
