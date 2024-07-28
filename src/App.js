import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Feed from './pages/feed/Feed';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
]);

function App() {
  return (

    <RouterProvider router={router} ></RouterProvider>

  );
}

export default App;
