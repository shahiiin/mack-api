import { Container, Navbar} from "react-bootstrap";
import Logo from "./../../assets/images/logo.svg";
import Nft from './../../assets/images/nft1.jpeg';
import { AiOutlineSearch } from 'react-icons/ai';
import './navbar.css';


const styles = {
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginLeft: '30px',
    marginTop: '-5px'
  }
}

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand >
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <AiOutlineSearch style={{ position: 'absolute',margin:11 }} />
            <input type='search' />
          <img src={Nft} alt="nft" style={styles.logo} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;
