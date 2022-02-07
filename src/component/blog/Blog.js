import React from 'react';
import SingleBlogPost from './SingleBlogPost.js';
function Blog({blogposts}) {
    return <div className='blog-post-wrapper'>
        {
            blogposts.map(i => 
                <SingleBlogPost
                    key={i.title}
                    title={i.title}
                    content={i.content}
                    imgUrl = {i.imgUrl}
                />
                )
      }
  </div>;
}

export default Blog;
