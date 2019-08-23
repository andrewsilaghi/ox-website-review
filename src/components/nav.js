import React, {Component}  from "react"
import { Link } from "gatsby"
import HamburgerMenu from "../components/hamburger-menu"

class NavBar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render(){    
    return (
      <div>
  <nav className={this.state.isTop ? 'navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top ' : 'navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top bg-black'} >
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
