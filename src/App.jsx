import './App.css'; 
import NavBar from './components/navbar'; 
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
import Cart from './pages/cart'; 

function App() {
  return (
    <div className="container"> {/* Main container for the entire app */}
      <div className='container-fluid'> {/* Container-fluid for a full-width layout */}
        <NavBar /> {/* Including the navigation bar component */}
        <Routes> {/* React Router setup for handling routes */}
          <Route path='/' Component={Home}></Route> {/* Route for the Home page */}
          <Route path='/cart' Component={Cart}></Route> {/* Route for the Cart page */}
        </Routes>
      </div>
    </div>
  );
}

export default App; 