import React from 'react';
import Header from '../../components/Header/Header';
import services from '../../libs/services';

class Details extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      post: undefined
    }

    this.getPost = this.getPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.deletePost = this.deletePost.bind(this);

    const id = props.id;
    this.getPost(id);
  }

  getPost (id) {
    services.post.search({id})
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res);
        const post = res.data.posts[0]
        this.setState({
          post
        })
      })
  }

  updatePost () {
    const id = this.props.id;
    services.post.update({id, ...this.state.post})
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res);
        const post = res.data.posts[0]
        this.setState({
          post
        }, () => {
          window.location.href = 'http://localhost:3000/'
        })
      })
  }

  setTitle(event) {
    const title = event.target.value;
    const post = {...this.state.post};
    post.title = title;
    this.setState({
      post
    })
  }

  setDescription(event) {
    const description = event.target.value;
    const post = {...this.state.post};
    post.description = description;
    this.setState({
      post
    })
  }

  deletePost () {
    const id = this.props.id;
    services.post.remove({id})
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res);
        window.location.href = 'http://localhost:3000/'
      })
  }

  render () {
    return(
      <div>
        <Header />
        <div className="container my-4">
        { this.state.post
        ?
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card p-4">
              <img src={`http://localhost:4500/images/${this.state.post.filename}`} className="img-fluid"/>
              <div className="form-group">
                <input className="form-control" placeholder="title" id="title" value={this.state.post.title} onChange={this.setTitle}/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" placeholder="description" id="description" value={this.state.post.description} onChange={this.setDescription}/>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="button" onClick={() => this.updatePost()}>Update</button>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-danger" type="button" onClick={() => this.deletePost()}>Delete</button>
              </div>
            </div>
          </div>
        </div>
        :
        <div>undefined</div>
        }
      </div>
      </div>
    );
  }
}

export default Details;
