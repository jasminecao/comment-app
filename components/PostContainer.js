import React from 'react'
import NewPost from './NewPost'
import Post from './Post'

const PostContainer = props => {
  console.log(props)
  const {entries, depth} = props
  if (entries.length === 0 || depth === 0) {
    return null
  }
  let entryList = entries.map(function(entry){
    return <Post entry={entry} depth={depth} />
  })

  return  <div className="posts">{ entryList }</div>
}

export default PostContainer