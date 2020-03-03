import React, {useState} from 'react'
import Voter from './Voter'
import NewPost from './NewPost'

const Post = props => {
  const {entry} = props
  const [showReply, setShowReply] = useState(true)
  if (entry.length == 0) {
    return null
  }

  const displayReply = () => {
    if (!showReply) {
      return <NewPost title="reply" />
    } else {
      return
    }
  }

  return (
    <>
      <div className="thread">
        <Voter />
        <p className="name">{entry.name}</p>
        <p className="post">{entry.post}</p>
        <button onClick={() => showReply ? setShowReply(false) : setShowReply(true)}>reply</button>
        {displayReply()}
      </div>
    </>
  )
}

export default Post