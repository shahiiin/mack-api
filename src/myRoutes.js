import { Container, Row, Col } from 'react-bootstrap';
import Personal from './components/info-bar/personal';
import Content from './components/content/content';
import Info from './components/info/info';
import User from './components/user/User';
import Header from './components/navbar/header';
import {
  BrowserRouter as
    Router,
  Route,
  Routes,
  Link
}
  from "react-router-dom";


const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#E6E6E6'
  },
}


const MyRoutes = () => {
  return (
    <>

      <Header />
      <Container fluid>
        <Row style={styles.container}>
          <Col>
            <Personal />
          </Col>
          <Col>
            <Router>
              <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/home' element={<Info />} />
              </Routes>
            </Router>
          </Col>
          <Col>
            <User />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default MyRoutes