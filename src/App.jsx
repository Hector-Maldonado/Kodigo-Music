import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Navbar } from './assets/pages/Navbar';
import { Footer } from './assets/pages/Footer';
import { Home } from './assets/pages/Home';
import { Explorer } from './assets/pages/Explorer';
import { UserContext, MyProvider } from './assets/context/UserDataContext';
import { Login } from './assets/pages/Login';
import './assets/css/styles.css';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return user ? children : null;
};
function App() {

  return (
    <MyProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/explorer"
              element={
                <ProtectedRoute>
                  <Explorer />
                </ProtectedRoute>
              }
            />
          </Routes>
          </main>
          <Footer />
          </div>
       
      </Router>
    </MyProvider>
  );
}

export default App;