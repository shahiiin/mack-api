import {useState,useEffect} from 'react'
import './user.css'
import { Card } from 'react-bootstrap'
import UserInfo from '../user-info/userInfo'





const User = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch('http://localhost:8000/detylie'
      , {
        method: 'GET',
      }
    )
      .then(res => {
        return res.json()
      } )
      .then(data => {
        setData(data)
      })
  }
  useEffect(() => {
    getData()
  }
  , [])

  return (
    <div className='user-info'>
      <UserInfo/>
      {
        data && data.length > 0 && data.map((item,index) => {
       
          return (
            <Card style={{ width: "18rem", height: '4.5rem' }}>
              <Card.Body className='card-info'>
                <img key={index} src={item.avatar} alt='avatar' />
                <Card.Text>
                  <p key={index}>{item.name}</p>
                  <span key={index}>{item.info}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>


  )
}
export default User;