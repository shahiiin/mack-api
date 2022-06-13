import {Tabs,Tab} from 'react-bootstrap'
import Aside from '../aside/Aside';
import ComingSoon from '../comming soon/comingSon';

const Personal = () => {
  return (
    <Tabs
    defaultActiveKey="home"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="Popular">
     <Aside />
    </Tab>
    <Tab eventKey="profile" title="Popular">
    <ComingSoon/>
    </Tab>
  
  </Tabs>
  )
}
export default Personal;