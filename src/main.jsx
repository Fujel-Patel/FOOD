import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from './Layout.jsx';
import Body from './Components/body/Body.jsx';
import About from './Components/about/About.jsx';
import Contact from './Components/contact/Contact.jsx'; // Import the Contact component
import ErrorPage from './ErrorPage.jsx';
import Cart from './Components/cart/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component here
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/FOOD",
        element: <Body />, // Render the Body component inside Layout
      },
      {
        path: "/FOOD/About",
        element: <About />, // Render the About component inside Layout
      },
      {
        path: "/FOOD/Contact",
        element: <Contact />, // Render the Contact component inside Layout
      },
      {
        path: "/FOOD/Cart",
        element: <Cart />, // Render the Cart component inside Layout
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
