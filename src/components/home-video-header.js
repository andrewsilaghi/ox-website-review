import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-modal';
import { window, document, exists } from 'browser-monads';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

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
  
  library.add(fas);


class HomeVideoBanner extends Component {
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
            <div>


              <div className="jumbotron jumbotron-fluid d-flex align-content-end webkit-flex flex-wrap header" style={{background: `url(${this.props.videoBanner}) no-repeat center center`}}>
              <div className="container mb-5">
              <div className="row">
                <div className="text-white">
                <div className="col-md-12">
                <div className="row">
                  <h1 className="col-md-8 text-white py-4 font-weight-bold header__title">{this.props.videoHeaderTitle}</h1>
                  </div>
                  </div>
                </div>
                </div>
              <div className="row">
              <div className="col-md-12">
              <button className="open-modal btn-outlined" onClick={this.openModal}>
              <a className="text-white">WATCH VIDEO <FontAwesomeIcon icon={['fas', 'caret-right']} size="1x" color="#ffffff" /></a>
              </button>
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
                  <iframe class="embed-responsive-item" src={this.props.videoUrl}></iframe>
                </div>
                </div>
              </Modal>
      </div>
        )}
}
  
  export default HomeVideoBanner