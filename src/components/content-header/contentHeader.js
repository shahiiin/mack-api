import './content-header.css'
import Avatar from './../../assets/images/pic1.jpeg'


const ContentHeader = () => {
  return (
    <div className="content-header">
      <img src={Avatar} alt='avatar' />
      <p>moderator</p>
      <span>3 October 2022 • 9:41</span>
    </div>
  )
}
export default ContentHeader;