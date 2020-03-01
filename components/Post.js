import React, {useState} from 'react'

const Post = props => {
  if (!props.valid) {
    return null
  }
  console.log(props)
  return (
    <h2>hi {props.name}</h2>
  )
}

export default Post