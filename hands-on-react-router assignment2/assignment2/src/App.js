
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BlogPost from './components/BlogPost';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/page/:id" element={<BlogPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
