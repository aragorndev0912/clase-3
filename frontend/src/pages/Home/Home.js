import React from 'react';
import Header from '../../components/Header/Header';
import CreatePost from '../../components/CreatePost/CreatePost';
import ShowPost from '../../components/ShowPost/ShowPost';
import services from '../../libs/services';


class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: {
        image: null,
        title: '',
        description: ''
      },
      posts: []
    }

    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setImage = this.setImage.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
    setInterval(() => {
      this.getPosts();
    }, 10000)
  }

  setTitle (event) {
    const post = {...this.state.post};
    post.title = event.target.value;
    this.setState({
      post
    })
  }

  setDescription (event) {
    const post = {...this.state.post};
    post.description = event.target.value;
    this.setState({
      post
    })
  }

  setImage (event) {
    const post = {...this.state.post};
    post.image = event.target.files[0];
    this.setState({
      post
    })
  }

  onSave () {
    const post = {...this.state.post};
    services.post.create(post)
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res);
      })
  }

  getPosts () {
    services.post.get()
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((res) => {
        const posts = res.data.posts;
        this.setState({
          posts
        })
      })
  }

  render () {
    return(
      <div>
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <CreatePost
                onSave={() => this.onSave()}
                setTitle={this.setTitle}
                setDescription={this.setDescription}
                setImage={this.setImage}
              />
            </div>
            <div className="col-md-8">
              <ShowPost posts={this.state.posts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
