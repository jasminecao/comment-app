import React, {useState} from 'react'
import Post from './Post'
import PostContainer from './PostContainer'
import {connect} from 'react-redux'

const NewPost = () => {
  const [nameInput, setNameInput] = useState('')
  const [postInput, setPostInput] = useState('')
  const [viewPost, setViewPost] = useState(false)
  const [entry, setEntry] = useState([])

  const handleClick = () => {
    if (nameInput !== '' && postInput !== '') {
      setViewPost(true)

      const newEntry = {
        name: nameInput,
        post: postInput,
      }
      const copyArray = entry.slice()
      copyArray.push(newEntry)
      setEntry(copyArray)
      console.log(entry)

      setNameInput('')
      setPostInput('')
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
      <button type="submit" onClick={() => handleClick()} disabled={(nameInput !== '' && postInput !== '') ? false : true}>submit</button>
      {console.log(entry)}
      <PostContainer entries={entry} />
      {/* <Post entry={entry} /> */}
    </>
  )
}

export default NewPost
