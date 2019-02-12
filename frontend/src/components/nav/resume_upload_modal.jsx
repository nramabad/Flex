import React from 'react';

import NewResumeStuff from "../resume/resume_form_container"

class ResumeUploadModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal (e) {

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
          <NewResumeStuff closeModal={this.closeModal} />
          </div>
        </div>;

    }
  }


}

export default ResumeUploadModal;
