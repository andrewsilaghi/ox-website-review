import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'

class OxIntro extends Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <section className="section--padding bg-black ox-intro">
            <div className="container text-white">
            <div className="row">
                <div className="col-md-9 read-more-wrap">
                    <h1 class="text-white font-weight-bold ox-intro__heading">OX Creative partners with leading brands + organizations working to
                    do good in the world.
                    </h1>
                </div>
                </div>
                <button className="arrow-btn d-flex align-items-center" onClick={() => this.setState({ showing: !showing })}><i class="arrow down"></i></button>
                
            
                { showing 
                    ? <div className="row"><div className="col-md-6"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utdsagd aasdg do enim ad minim vdasgdhseniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p></div><div className="col-md-6"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utdsagd aasdg do enim ad minim vdasgdhseniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p></div></div>
                    : null
                }
            
            </div>
        </section>
        )
    }
}
export default OxIntro