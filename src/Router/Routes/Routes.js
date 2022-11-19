import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
import Update from "../../Pages/Update/Update";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: '/ServiceDetails/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://y-six-phi.vercel.app/services/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params}) => fetch(`https://y-six-phi.vercel.app/reviews/${params.id}`)
     },
      {
        path: '/AddServices',
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path:'/services/:id',
        element:<AddServices></AddServices>,
        loader:({params})=>fetch(`https://y-six-phi.vercel.app/services/${params.id}`) 
     }
    ]
  }
]);

export default router;