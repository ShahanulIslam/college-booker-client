import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import CardDetails from "../Pages/Home/CardDetails/CardDetails";
import College from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import CollegeList from "../Pages/Admission/CollegeList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3500/collegedata")
      },
      {
        path: "/colleges",
        element: <College></College>,
        loader: () => fetch("http://localhost:3500/data")
      },
      {
        path: "/collegeDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:3500/data/${params.id}`)
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:3500/collegedata/${params.id}`)
      },
      {
        path: "/admission",
        element: <CollegeList></CollegeList>,
        loader: () => fetch("http://localhost:3500/data")
      },
      {
        path: "/admission/:id",
        element: <Admission></Admission>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
])
