import { useEffect, useState } from 'react';
import './aside.css'
import { Card } from 'react-bootstrap'
import { BsThreeDotsVertical, BsArrowUpShort } from "react-icons/bs";
import { BiDownArrowAlt } from 'react-icons/bi'
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";



const Aside = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch('http://localhost:8000/detylie'
      , {
        method: 'GET',
      }
    )
      .then(res => {
        return res.json()
      })

      .then(data => {
        setData(data)

      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="aside">
      {/* <nav>
        <Link to='/home'>
          <button className='btn btn-primary'>Login</button>
        </Link>
      </nav> */}
      {data && data.length > 0 && data.map((item, index) => {
        return (
          <Card key={index}>

            <Card.Title>
            </Card.Title>
            <Card.Body>
              <BsThreeDotsVertical style={{ position: 'absolute', marginLeft: '10rem' }} />
              <p >{item.content}</p>
              <div className="icon">
                <BsArrowUpShort style={{ color: '#9d9d95', fontSize: 14 }} />
                <span>{item.high}</span>
                <BiDownArrowAlt style={{ color: '#9d9d95', fontSize: 14 }} />
                <span >{item.low}</span>
                <RiMessage2Fill style={{ color: '#9d9d95', fontSize: 14 }} />
                <span key={index}>{item.message}</span>
                <span key={index}>{item.total}</span>
              </div>
            </Card.Body>
          </Card>
        )
      })
      }
    </div>
  )
}
export default Aside;