import React, {useState} from 'react'

const Voter = props => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p onClick={() => setCount(count + 1)}>upvote</p>
      <p onClick={() => setCount(count - 1)}>downvote</p>
      <p>{count}</p>
    </>
  )
}

export default Voter