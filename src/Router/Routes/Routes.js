import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
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
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://y-six-phi.vercel.app/services/${params.id}`)
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: '/ServiceDetails/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/AddServices',
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
    ]
  }
]);

export default router;