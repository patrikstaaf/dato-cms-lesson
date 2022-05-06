import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:slug' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
