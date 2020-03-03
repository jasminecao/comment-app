import React from 'react'

import NewPost from './NewPost'
import Post from './Post'

const PostContainer = props => {
  const {entries} = props
  if (entries.length == 0) {
    return null
  }
  let entryList = entries.map(function(entry){
    return <Post entry={entry}/>;
  })

  return  <div className="posts">{ entryList }</div>
}

export default PostContainer