import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Order from './pages/Order';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import Books from './pages/Books';
import CreateAuthor from './Crud_Components/AuthorCrud/CreateAuthor';
import CreateBook from './Crud_Components/BookCrud/CreateBook';
import EditAuthor from './Crud_Components/AuthorCrud/EditAuthor';
import ViewAuthor from './Crud_Components/AuthorCrud/ViewAuthor';
import EditBook from './Crud_Components/BookCrud/EditBook';
import ViewBook from './Crud_Components/BookCrud/ViewBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/create-author' element={<CreateAuthor />} />
          <Route path='/edit-author/:id' element={<EditAuthor />} />
          <Route path='/view-author/:id' element={<ViewAuthor />} />
          <Route path='/upload-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<EditBook />} />
          <Route path='/view-book/:id' element={<ViewBook />} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
