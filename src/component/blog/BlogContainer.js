import React,{useContext} from 'react';
import BlogHeader from './BlogHeader';
import Blog from './Blog'
import { ThemeContext } from '../../App';
function BlogContainer() {
 const value = useContext(ThemeContext)
    return <div>
      <BlogHeader
        setPosts={(val) => {
          value.setPosts([...value.posts, val])
         }}
      />
      <Blog blogposts={value.posts}/>
  </div>;
}

export default BlogContainer;
