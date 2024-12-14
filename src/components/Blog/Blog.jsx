import PropTypes from 'prop-types';
import { BiBookmark } from 'react-icons/bi';

const Blog = ({blog,handleBookmark,handleReadTime}) => {
    // console.log(blog)
    const {id,hashtags,reading_time,posted_date,author,author_img,title,cover}=blog;
    return (
        <div className='m-3 bg-slate-300 p-5 border border-yellow-400 '>
            <h1>Title: {title}</h1>
            <img className='w-300 h-3l border border-red-600' src={cover} alt="image banner"  />
            <div>

                <h2>Author: {author}</h2>
                <img src={author_img} alt={author}  className='h-20 w-20'/>
            </div>
           <div className='flex flex-row gap-20'>
            <button onClick={() => handleBookmark(blog)}><BiBookmark /></button>
            <button className='bg-slate-400 p-2 rounded-xl' onClick={()=>handleReadTime(reading_time)}>Reading Done</button>
            <p>Reading Time : {reading_time}</p>
           </div>
            <div className='flex flex-row gap-4'>
                {
                    hashtags.map((hash,idx)=> <span key={idx} > <a href=""> #{hash}</a> </span>)
                }  
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired,
  };
export default Blog;