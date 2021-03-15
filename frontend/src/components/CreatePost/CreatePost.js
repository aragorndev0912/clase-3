const CreatePost = (props) => {
  return(
    <div className="card p-4">
      <div className="input-group mb-3">
        <input type="file" className="form-control" id="image" onChange={props.setImage}/>
      </div>
      <div className="form-group">
        <input className="form-control" placeholder="title" id="title" onChange={props.setTitle}/>
      </div>
      <div className="form-group mt-3">
        <textarea className="form-control" placeholder="description" id="description" onChange={props.setDescription}/>
      </div>
      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-primary" type="button" onClick={props.onSave}>Save</button>
      </div>
    </div>
  );
}

export default CreatePost;