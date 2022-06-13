import { BsArrowUpShort } from "react-icons/bs";
import { BiDownArrowAlt } from 'react-icons/bi'
import './icons.css'


const Icons = () => {
  return (
    <div className="icon-bar">
      <span>Replay</span>
      <BiDownArrowAlt style={{ color: '#9d9d95', fontSize: 14 }} />
      <span>3250</span>
      <BsArrowUpShort style={{ color: '#9d9d95', fontSize: 14 }} />
      <span>5415</span>
   
    </div>
  )
}
export default Icons
