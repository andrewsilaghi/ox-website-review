import React, {Component}  from "react"
import { Link } from "gatsby"
import HamburgerMenu from "../components/hamburger-menu"

class NavBar extends Component {

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
 
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (window.scrollY < 100) {
      document.getElementById('nav').classList.remove("bg-black");
    } else {
      document.getElementById('nav').classList.add("bg-black");
    }
  }
  render(){    
    
    return (
      <div>
  <nav id="nav" className="navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top why-u-no-work" >
<div className="container py-3" style={{ color: `black` }}>
  <Link className="mx-auto d-block" to="/"><img className="my-auto" src="http://andrewsilaghi.com/ox/wp-content/uploads/2019/08/ox-logo-lg.png" alt="Logo" width="50px"/></Link>
  </div>
  </nav>
  <HamburgerMenu></HamburgerMenu>
  </div>
    )
}
}

export default NavBar
