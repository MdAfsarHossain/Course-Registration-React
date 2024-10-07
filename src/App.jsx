import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);


  const addBookmarks = (bookmark, currentCredit, handleCredit, handlePrice, totalPrice) => {
    if(!bookmarks.includes(bookmark)) {
      if(handleCredit(currentCredit)) {
        setBookmarks([...bookmarks, bookmark]);
        handlePrice(totalPrice);
        toast.success(`Course ${bookmark.title} added to bookmarks!`)
      }
    } else {
      toast.error(`Course ${bookmark.title} is already in bookmarks!`)
    }
  }


  const handleCredit = (newCredit) => {
    const newTotalCredit = credit + newCredit;
    if(newTotalCredit >=0 && newTotalCredit<=20) {
      setCredit(credit + newCredit);
      return true;
    } else {
      toast.error('You are not allowed to take more than 20 credits!');
      return false;
    }
  }
  
  const handlePrice = (newPrice) => {
    setPrice(price + newPrice);  // Set Total price
  }


  return (
    <div className='max-w-7xl mx-auto mb-16 px-5 lg:px-0'>
      <ToastContainer position='top-center'/>
      <Header></Header>
      <div className="flex flex-col md:items-center md:justify-center lg:items-start lg:justify-start lg:flex-row gap-14 lg:gap-0 py-5 md:px-0 lg:px-0">
        <Courses
        addBookmarks={addBookmarks}
        handleCredit={handleCredit}
        handlePrice={handlePrice}
        ></Courses>

        <Bookmarks
        bookmarks={bookmarks}
        credit={credit}
        price={price}
        handlePrice={handlePrice}
        ></Bookmarks>
      </div>      
    </div>
  )
}

export default App
