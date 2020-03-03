import React, {useState} from 'react'
import Post from './Post'
import PostContainer from './PostContainer'
import Title from './Title'

const NewPost = (props) => {
  const {title} = props
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
      <div className="newpost">
        <Title title={title}/>
        <input type="text" placeholder="name..." value={nameInput} onChange={e => setNameInput(e.target.value)} />
        <textarea placeholder="write a new post..." value={postInput} onChange={e => setPostInput(e.target.value)} />
        <button type="submit" onClick={() => handleClick()} disabled={(nameInput !== '' && postInput !== '') ? false : true}>submit</button>
      </div>
      <PostContainer entries={entry} />
    </>
  )
}

export default NewPost
