import { Card } from 'react-bootstrap'
import "./content.css"
import Nft from './../../assets/images/nft2.jpeg'
import Icons from '../icons/icons'
import ContentHeader from '../content-header/contentHeader'



const styles = {
  avatar: {
    borderRadius: 15,
    width: '100%',
    marginBottom: '10px'
  },
  span: {
    color: '#03B425',
    fontSize: 11,
    float: 'right',
    marginRight: '2rem',
    marginTop: 4
  }
}

const Content = () => {
  return (
    <div className="content">
      <Card >
        <Card.Body>
          <Card.Title>
            <ContentHeader/>
          </Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
              sed do eiusmod tempor consectetur adipiscing elit, sed <br></br>
              do eiusmod tempor consectetur Lorem ipsum dolor sit<br></br>
              amet, consectetur adipiscing elit, sed do eiusmod <br></br>
              tempor consectetur adipiscing elit,Lorem ipsum dolor sit<br></br>
              amet, consectetur adipiscing elit, sed do eiusmod <br></br>
              tempor consectetur adipiscing elit,Lorem ipsum dolor sit<br></br>
              amet, consectetur adipiscing elit,sed do eiusmod<br></br>
              tempor consectetu adipisc sit ameth...
              <span style={styles.span}>More...</span>
            </p>
          </Card.Text>
          <div className="icon-bar" style={{ width: '50%' }}>
            <img src={Nft} alt='nft' style={styles.avatar} />
            <Icons />
          </div>
        </Card.Body>
      </Card>
     
    </div>
  )
}
export default Content;