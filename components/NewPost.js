import React, {useState} from 'react'
import Post from './Post'

const NewPost = () => {
  const [nameInput, setNameInput] = useState('')
  const [postInput, setPostInput] = useState('')
  const [viewPost, setViewPost] = useState(false)
  let nameText = ''
  let postText = ''

  const handleClick = () => {
    if (nameInput !== '' && postInput !== '') {
      nameText = nameInput
      postText = postInput
      console.log(nameText)
      setViewPost(true)
      // setNameInput('')
      // setPostInput('')
    }
  }

  return (
    <>
      <h2>new post</h2>
      <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
      <br></br>
      <br></br>
      <input type="text" value={postInput} onChange={e => setPostInput(e.target.value)} />
      <br></br>
      <br></br>
      <button type="submit" onClick={handleClick}>submit</button>
      <Post name={nameText} post={postText} depth={0} valid={viewPost} />
    </>
  )
}

export default NewPost