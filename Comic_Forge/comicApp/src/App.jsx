import { useState, Suspense, lazy } from 'react'
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'

const Home = lazy(()=>import('@/pages/Home'))
const BookCase = lazy(()=>import('@/pages/BookCase'))
const Square = lazy(()=>import('@/pages/Square'))
const AIGallery = lazy(()=>import('@/pages/AIGallery'))
const Account = lazy(()=>import('@/pages/Account'))
const Search = lazy(()=>import('@/pages/Search'))
const Bookmark = lazy(()=>import('@/pages/BookCase/BookmarkPage'));
const Booklist = lazy(()=>import('@/pages/BookCase/BooklistPage'));
const History = lazy(()=>import('@/pages/BookCase/HistoryPage'));

const App = () => {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/bookcase' element={<BookCase />} />
            <Route path='/square' element={<Square />} />
            <Route path='/aigallery' element={<AIGallery />} />
            <Route path='/account' element={<Account />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
            
          </Route>
        </Routes>
      </Suspense>
    </>
  )
};

export default App;

