import React from 'react';
import '../style/container.css';
import Header from './Header';
import BlogContainer from './blog/BlogContainer';
function Layout() {
    return <div className='container'>
      <Header />
      <BlogContainer/>
  </div>;
}

export default Layout;
