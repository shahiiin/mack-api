import './info.css'
import { Card } from 'react-bootstrap'
import Eth from './../../assets/images/Eth.png'
import Slider from './../../assets/images/slider.png'






const Info = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
            <h5>This is your coin price</h5>
          </Card.Text>
          <img src={Eth} alt="Eth" />
          <img src={Slider} alt="Slider" />
        </Card.Body>

      </Card>
    </div>
  )
}
export default Info