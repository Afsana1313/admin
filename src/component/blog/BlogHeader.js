import React,{useState} from 'react';
import { PlusSquareOutlined, CloseOutlined } from '@ant-design/icons';
import '../../style/drawer.css'

function BlogHeader(props) {
     const [visible, setVisible] = useState(false);
     
    const [postTitle, setPostTitle] = useState('');
    const [content, setContent] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    const title = {
        fontSize: '30px',
        lineHeight: '34px'
    }
    const handleSubmit = (e) => {
        const newPost = {
            title: postTitle,
            content: content,
            imgUrl: imgUrl
        }
        props.setPosts(newPost)
        setPostTitle('');
        setContent('');
        setImgUrl('');
        setVisible(false)
        e.preventDefault();
    }
    return <div className='blog-header-container'>
        <h2 style={title}>
            Blog
        </h2>
        <button className='btn'
        onClick={showDrawer}>
            <PlusSquareOutlined
                className='icon'
            />
            New Post
        </button>
        {visible && <div className='drawer'>
                <div className='drawer-header' onClick={onClose}>
                        <CloseOutlined />
            </div>
            <h2>Enter New Post Details </h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Enter Title'
                    type='text'
                    value={postTitle}
                    onChange={(e)=> setPostTitle(e.target.value)}
                />
                <input
                    placeholder='Enter Content'
                    type='text'
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                />
                <input
                    placeholder='Enter Image URL'
                    type='text'
                    value={imgUrl}
                    onChange={(e)=> setImgUrl(e.target.value)}
                />
                <input
                    className='submit-btn'
                    type='submit'
                    value='Submit'
                />
            </form> 
        </div>}
  </div>;
}

export default BlogHeader;
