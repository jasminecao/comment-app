import React, {useState} from 'react'
import Voter from './Voter'
import NewPost from './NewPost'

const Post = props => {
  const {entry, depth} = props
  const [showReply, setShowReply] = useState(false)
  if (entry.length === 0 || depth === 0) {
    return null
  }

  const displayReply = () => {
    if (showReply) {
      return <NewPost title="reply" depth = {depth - 1}/>
    }
  }

  return (
    <>
      <div className="thread">
        <Voter />
        <p className="name">{entry.name}</p>
        <p className="post">{entry.post}</p>
        {displayReply()}
        <button onClick={() => showReply ? setShowReply(false) : setShowReply(true)}>reply</button>
      </div>
    </>
  )
}

export default Post