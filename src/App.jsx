import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [handleBook,setHandleBook]=useState([]);
  const [readingTime=0,setReadingTime]=useState();
  const handleBookmark =(blog)=>{
    console.log(blog.id);
    console.log(typeof handleBook)
    const newBookmark = [...handleBook,blog];
    setHandleBook(newBookmark);
    //setHandleBook(blog);
  }
  const handleReadTime =(time)=>{
    console.log('read',time);
    const newTime= readingTime+time;
    setReadingTime(newTime);
  }

  return (
    <>
      <Header></Header>
      <div className='flex' >
     
      <Blogs handleBookmark={handleBookmark} handleReadTime= {handleReadTime}></Blogs>
      <Bookmarks handleBook={handleBook} readingTime={readingTime}></Bookmarks>
        </div>     
    </>
  )
}

export default App
