import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class ResumeUploadModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal (e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    } else {
      return <div>
          <div onClick={this.closeModal} className="resume-upload-modal-backdrop" />
          <div className="resume-upload-modal">
            <textarea />
            <button>Upload Resume</button>
          </div>
        </div>;
    }
  }


}

export default ResumeUploadModal;
