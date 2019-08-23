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
  
    

class VideoBanner extends Component {
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
            <div className="video-banner">
              <img className="video-banner-bg" src={this.props.videoBanner} alt="Snow"/>
              <button className="open-modal" onClick={this.openModal}>
              <div className="d-flex flex-row align-items-center">
                <div class="style__VideoIconWrapper-sc-1jcsfwo-8 eTmNXU">
                <svg className="style__VideoIcon-sc-1jcsfwo-9 ihnEFr" viewBox="0 0 6 8">
                  <path
                    fillRule="evenodd"
                    d="M5.92 3.843c.13.087.128.229 0 .314L.235 7.975C.104 8.06 0 8.015 0 7.857V.143C0-.009.107-.06.234.025L5.92 3.843z"
                  />
                </svg>
                </div>
                <a className="font-weight-bold video-banner__btn-text">WATCH VIDEO</a>
                </div>
              </button>
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
  
  export default VideoBanner