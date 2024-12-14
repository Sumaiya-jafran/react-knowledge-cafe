import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({handleBookmark,handleReadTime}) => {
const [blogs, setBlogs] = useState([]);
// useEffect(()=>{
//     fetch('blogs.json')
//     .then(res => res.json())
//     .then(data => setBlogs(data))
// },[])
useEffect(()=>{
fetch('blogs.json')
.then(res => res.json())
.then(data => setBlogs(data))
},[])
    return (
        <div className='w-2/3 bg-slate-400 p-7 text-center'>
          <h1>Total Blogs: {blogs.length}</h1>  
          {
            blogs.map(blog => <Blog key ={blog.id} blog = {blog} handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blog>)
          }
          
        </div>
    );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired
};
export default Blogs;