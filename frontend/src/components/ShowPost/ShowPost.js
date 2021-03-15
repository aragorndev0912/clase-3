import { Link } from 'react-router-dom';

const ShowPost = (props) => {
  return(
    <div className="row">
      { props.posts.map((post) => 
        <div className="col-md-4" key={post._id}>
          <Link to={`/details/${post._id}`} exact>
            <img src={`http://localhost:4500/images/${post.filename}`} className="img-fluid"/>
            <span>{post.title}</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShowPost;