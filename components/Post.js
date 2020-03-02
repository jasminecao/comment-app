import React, {useState} from 'react'
import Voter from './Voter'
import NewPost from './NewPost'

const Post = props => {
  const {entry} = props 
  if (entry.length == 0) {
    return null
  }
  return (
    <>
      <Voter />
      <h2>hi {entry.name}</h2>
      <h2>{entry.post}</h2>
      <button>Reply</button>
      <NewPost />
    </>
  )
}

export default Post