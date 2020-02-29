import React, {useState} from 'react'
import Post from './Post'

const NewPost = () => {
  const [author, setAuthor] = useState('')
  const [postInput, setPostInput] = useState('')

  return (
    <>
      <h2>new post</h2>
      <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
      <br></br>
      <br></br>
      <input type="text" value={postInput} onChange={e => setPostInput(e.target.value)} />
      <br></br>
      <br></br>
      <button type="submit">submit</button>
      <Post />
    </>
  )
}

export default NewPost