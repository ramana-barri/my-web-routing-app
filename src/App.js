import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { RouterProvider,createBrowserRouter,Navigate } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Home />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/contact',
      element:<Contact />
    },
    {
      path:'*',
      element:<Navigate to='/home' />
    }
  ]);

  return (
    <div className="App">
      <div className="bg-primary text-white text-center header">My First Web App</div>

      <div className="text-end bodier">
        <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
      </div>

      <RouterProvider router={router} /> 

      <div className="position-fixed bottom-0 footer bg-primary text-center text-white">&copy;Copyrights belong to me only.</div>
    </div>
  );
}

export default App;
