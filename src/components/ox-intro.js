import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-modal';
import { window, document, exists } from 'browser-monads';

const customStyles = {
    content : {
      top                   : '50%',
      width                 : '100%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('yourAppElement'))
  
    
class OxIntro extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
      
     render() {
        return (
            <section className="section--padding bg-white ox-intro">
            <div className="container text-white">
            <div className="row">
                <div className="col-md-6 ox-intro__paragraph">
                <p dangerouslySetInnerHTML={{ __html: this.props.leftColumn }}></p>
                </div>
                <div className="col-md-6 ox-intro__paragraph">
                <p dangerouslySetInnerHTML={{ __html: this.props.rightColumn }}></p>
                <div className="row">
                <div className="col-md-12">
                <button className="d-none open-modal btn-outlined--orange mt-4" onClick={this.openModal}>
                  <a>Our Philosophy</a>
                  </button>
                  </div>
                </div>
                </div>
                </div>
           
            </div>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <div className="container-fluid">
            <button className="close-module" onClick={this.closeModal}></button>
            <div class="embed-responsive embed-responsive-21by9">
              <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/229053959"></iframe>
            </div>
            </div>
          </Modal>
        </section>
        )
    }
}

export default OxIntro

