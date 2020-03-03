import React, {useState} from 'react'
import Voter from './Voter'
import NewPost from './NewPost'

const Post = props => {
  const {entry, depth} = props
  const [showReply, setShowReply] = useState(true)
  const [count, setCount] = useState(1)
  const [replyList, setReplyList] = useState([])

  if (entry.length === 0 || depth === 0) {
    return null
  }

  // const displayReply = () => {
  //   if (showReply) {
  //     let copyList = [<div key={0}> <NewPost title={"reply"} depth={depth - 1} /> </div>]
  //     setReplyList(copyList)
  //   }
  // }

  const addReply = () => {
    setCount(count + 1)
    let copyList = replyList.slice()
    copyList.push(<div key={count}> <NewPost title={"reply"} depth={depth - 1} /> </div>)
    console.log(count)
    console.log(copyList)
    setReplyList(copyList) 
  }

  console.log(replyList)

  return (
    <>
      <Voter />
      <p className="name">{entry.name}</p>
      <p className="post">{entry.post}</p>
      {replyList}
      <button className="reply" onClick={() => addReply()}>reply</button>
    </>
  )
}

export default Post