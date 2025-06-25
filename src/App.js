import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ClassworkPage from './pages/ClassworkPage';
import ActivitiesPage from './pages/ActivitiesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classwork" element={<ClassworkPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
