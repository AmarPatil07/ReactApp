import logo from '../reactlogo.png'
function Header(){
return (
  <div className="header">
      <img src={logo} alt="logo" ></img>
      <a href="#" style={{position: "absolute", right:0, marginRight:140}}>Log out</a>
  </div>
)
}

export default Header;