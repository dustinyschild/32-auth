import './_pic-form.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action/pic-actions';

class PicForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      desc: '',
      file: null,
      preview: ''
    };

    this.readFile = this.readFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  readFile(file){
    return new Promise((resolve,reject) => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        resolve(reader.result);
      });
      reader.addEventListener('error', () => {
        reject(reader.error);
      });

      if (file) return reader.readAsDataURL(file);

      return reject(new Error('file not found'));
    });
  }

  handleChange(event){
    if (event.target.name === 'file'){
      this.readFile(event.target.files[0])
        .then(preview => this.setState({ preview }))
        .then(() => console.log(this.state));
    }
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.props.gallery);
    this.props.createPic(this.state,this.props.gallery._id);
    this.setState({
      name: '',
      desc: '',
      file: null,
      preview: ''
    });
  }

  render(){
    return(
      <div className="pic-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name="name"
              type="text"
              placeholder="Pic name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="desc"
              type="text"
              placeholder="Description"
              value={this.state.desc}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="file"
              type="file"
              onChange={this.handleChange}
            />
          </label>
          {this.state.preview ?
            <img width="200" src={this.state.preview}/> :
            <h3>Preview Image Here</h3>
          }
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  pics: state.pics,
});
const mapDispatchToProps = dispatch => ({
  createPic: (pic,gallery) => dispatch(actions.createPicRequest(pic,gallery))
});

export default connect(mapStateToProps,mapDispatchToProps)(PicForm);
