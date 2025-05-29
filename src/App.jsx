import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog1 from './components/Blog1';
import FrontPage from './components/Frontpage';
import Blog2 from './components/blog2';

  function App() {
  return (
   
     <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/blog1" element={<Blog1 />} />
         <Route path="/blog2" element={<Blog2 />} />
      </Routes>
    </Router>
   
  );
}

export default App


