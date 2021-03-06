import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import PDFJS from 'pdfjs-dist';

PDFJS.GlobalWorkerOptions.workerSrc = '/../../pdf.worker.js';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      height:700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  Resumemain: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 817,
      marginLeft: 'auto',
      height: `100%`,
      maxHeight: `570px`,
      width: `96%`,
      maxWidth: `1080px`
    },
  },

  form: {
    height: `100%`,
    maxHeight: `570px`,
    width: `100%`,
    maxWidth: `1080px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: `100%`,
    maxHeight: `570px`,
    width: `100%`,
    maxWidth: `1080px`
  },
});

const eStyle = {
  color:`red`,
  fontWeight: `bold`,
  listStyleType: `none`,
  textAlign: 'center',
  marginLeft:`-95px`
};
// const rStyle = {
//   color:`red`,
//   listStyleType: `none`,
//   textAlign: 'center',
//   fontWeight: `bold`
// };

const errorlist = {
  width: `100%`
};


  class NewResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: '',
            user:this.props.user.id,
            errors: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.parsePDF = this.parsePDF.bind(this);
        // this.clearedErrors = false;
        // this.nextPage = this.nextPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors.resume){

          this.setState({ errors: nextProps.errors })
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    parsePDF(e) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const typedArray = new Uint8Array(reader.result);

        PDFJS.getDocument({data: typedArray}).then(pdf => {
          const allPromises = []; 
          const pageTexts = [];
          
          for(let i = 1; i <= pdf.numPages; i++) {
            allPromises.push(
              pdf.getPage(i).then(page => {
                return page.getTextContent().then(content => {
                  let combinedContent = content.items.map(item => item.str).join('');
                  pageTexts.push(combinedContent);
                });
              })
            );
          }

          Promise.all(allPromises).then(() => {
            const combinedPageTexts = pageTexts.join(' ');
            this.setState({resume: combinedPageTexts});
          });
        });
      };
      
      reader.readAsArrayBuffer(selectedFile);
    }

    // nextPage(e) {
    //
    //     // this.props.mockSignup(user)
    //     if (this.state.resume.length > 50 && this.state.resume.length < 38380) {
    //         this.setState( { firstPage: false, errors: {} } );
    //
    //     } else if (this.state.resume.length === 0) {
    //         this.setState({ resumeErrors: "Resume field is required" });
    //     } else {
    //         this.setState({ resumeErrors: "Resume / CV must be between 50 and 38380 characters" });
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            text: this.state.resume,
            user: this.state.user
        };
        if (data.text.length === 0) {
          this.setState({errors: 1})
        } else if (data.text.length < 50 || data.text.length > 38380) {
          this.setState({errors: 2})
        }else {
          this.props.composeResume(data).then(() => this.props.fetchUserResumes(this.props.user.id))
          this.props.closeModal();
        }
    }

    renderErrors() {
      let message = null
      if (this.state.errors === 1){
        message = "Resume field is required"
      } else if (this.state.errors === 2) {
        message = "Resume / CV must be between 50 and 38380 characters"
      }
      return(
        <ul style={errorlist} >
        <li style={eStyle} >
          {message}
        </li>
        </ul>
      )
    }

    render(){
      const { classes } = this.props;
      return (
        <div className="resume-modal-content">
            <main className={classes.Resumemain}>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <div id="or-div">
                <span>Copy and paste your resume text into the box below, or...</span>
                <input
                  hidden
                  ref={"pdf-upload"}
                  id='pdf-upload'
                  type='file'
                  accept='.pdf'
                  onChange={this.parsePDF}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={e => { this.refs['pdf-upload'].click() }}
                >
                  Parse Text From Resume PDF
                </Button>
              </div>
              <TextField
                value={this.state.resume} onChange={this.update("resume")}
                placeholder="Paste your resume here..."
                id="outlined-multiline-static"
                label="Paste your resume here..."
                multiline
                rows="18"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              {this.renderErrors()}

              <Button
                type="submit"
                value="Submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Submit
              </Button>
            </form>
            </main>
        </div>
      )
    }
  }
  export default withRouter(connect()(withStyles(styles)(NewResume)))
