import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import _Post from './Post'

const Post = _Post as unknown as React.JSXElementConstructor<{
  key: string
  id: string
  username: string
  userImg: string
  img: string
  caption: string
}>;

function Posts() {

  const [posts, setPosts] = useState<any>([]);

  useEffect(() =>
    onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs);
      }), [db])

  console.log(posts)

  return (
    <div>
      {posts.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
