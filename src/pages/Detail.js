import { Button, Col, Container, Row } from 'react-bootstrap'
import './Detail.css'

export default function DetailPage(props){
  return(
    <>
      <Container>
        <Row>
          <Col>
            <img src='/img/1.png' width={'400px'} height={'300px'}/>
          </Col>
          <Col>
            <h4>{props.items[0].title}</h4>
            <p>{props.items[0].content}</p>
            <p>{props.items[0].price}원</p>
            <Button>주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}