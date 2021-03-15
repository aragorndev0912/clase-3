const HOST = 'http://localhost:4500'

const create = ({title, description, image}) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', image);

  return fetch(`${HOST}/post`, {
    method: 'POST',
    body: formData
  })
}

const get = () => {
  return fetch(`${HOST}/post`)
}

const search = ({id}) => {
  return fetch(`${HOST}/post/${id}`)
}

const update = ({id, title, description}) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);

  return fetch(`${HOST}/post/${id}`,{
      method: 'PUT',
      body: formData
    })
}

const remove = ({id}) => {
  return fetch(`${HOST}/post/${id}`,{
      method: 'DELETE'
    })
}

export default {
  create,
  get,
  search,
  update,
  remove
}