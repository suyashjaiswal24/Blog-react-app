import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <div className="headerTitleSm">React & Node</div>
            <div className="headerTitleLg">Blog</div>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    </div>
  )
}
