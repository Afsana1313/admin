import React,{useContext, useState} from 'react';
import { DeleteOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons'
import { ThemeContext } from '../../App';
function SingleBlogPost(props) {
     const value = useContext(ThemeContext) 
    const [visible, setVisible] = useState(false);
    
    const [postTitle, setPostTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [imgUrl, setImgUrl] = useState(props.imgUrl);
     const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
   const handleSubmit = (e) => {

       const a = value.posts.map((i) => {
           if (props.title === i.title) {
               i.title = postTitle;
               i.content = content;
               i.imgUrl = imgUrl;
           }
           return i;
       }
       )
        value.setPosts(a);  
        setPostTitle('');
        setContent('');
        setImgUrl('');
        // setVisible(false)
        e.preventDefault();
    }

    const imgStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '20vh',
        overflow: 'hidden'
    }
    const handleDelete = (a) =>
    { 
        const newPosts = value.posts.filter(i => i.title !== a)
        value.setPosts(newPosts)
    }
    return <div className='single-blog-post-container'>
        <div>
            <img
                style={imgStyle}
                src={props.imgUrl}
                alt={props.title}
            />
        </div>
        <div className='single-blog-post'>
            <div className='single-blog-post-text'>
                <h2>
                    {props.title}
                </h2>
                <span>{ props.content}</span>
            </div>
            <div className='single-blog-post-btn'>
                <DeleteOutlined
                    onClick={()=> handleDelete(props.title)}
                />
                <EditOutlined
                    onClick={showDrawer}
                />
            </div>
            
        </div>
        {visible && <div className='drawer'>
                <div className='drawer-header' onClick={onClose}>
                        <CloseOutlined />
            </div>
            <h2>Edit Post Details </h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Enter Title'
                    type='text'
                    value={postTitle}
                    onChange={(e)=> setPostTitle(e.target.value)}
                />
                <textarea
                    placeholder='Enter Content'
                    type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    cols={50}
                >
                </textarea>
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

export default SingleBlogPost;
