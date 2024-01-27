import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './home/Home.jsx'

import SingleProduct from './Courses/SingleProduct.jsx'
import CartPage from './Courses/CartPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about/About.jsx'
import Contact from './contact/Contact.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Course from './Courses/Course.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/courses",
        element: <Course />
      },
      {
        path: "shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage /></PrivateRoute>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "sign-up",
    element: <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
