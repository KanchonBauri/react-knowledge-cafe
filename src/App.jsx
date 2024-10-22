import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = blog => {
    // console.log(blog);
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  }

  const handleAddAsMark = (id, time) => {
    // console.log("time", time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remoce the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex gap-5' >
        <Blogs handleAddToBookMark={handleAddToBookMark} handleAddAsMark={handleAddAsMark} ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} ></BookMarks>
      </div>
    </>
  )
}

export default App
