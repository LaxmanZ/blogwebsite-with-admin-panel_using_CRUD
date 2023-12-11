import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importing  pages
import Home from '../pages/Home';
import Author from '../pages/Author';
import AuthorPosts from '../pages/AuthorPosts';
import CategoryPosts from '../pages/CategoryPosts';
import CreatePosts from '../pages/CreatePosts';
import Dashboard from '../pages/Dashboard';
import DeletePost from '../pages/DeletePost';
import EditPost from '../pages/EditPost';
import ErrorPost from '../pages/ErrorPost';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Logout from '../pages/Logout';
import PostDetail from '../pages/PostDetail';
import UserProfile from '../pages/UserProfile';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/posts/user/:id" element={<AuthorPosts />} />
        <Route path="/posts/categories/:category" element={<CategoryPosts />} />
        <Route path="/create" element={<CreatePosts />} />
        <Route path="/mypost/:id" element={<Dashboard />} />
        <Route path="/delete" element={<DeletePost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="*" element={<ErrorPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
