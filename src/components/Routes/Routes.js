import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import StartBooking from "../pages/StartBooking/StartBooking";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Destination from "../pages/Destination/Destination";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {path: '/', element: <Home></Home>, loader: ()=> fetch('https://hotel-room-booking-server.vercel.app/hotels')},
            {path: '/startbooking', element: <StartBooking></StartBooking>},
            {path: '/destination', element: <PrivateRoute><Destination></Destination></PrivateRoute>},
            {path: '/signup', element: <SignUp></SignUp>},
            {path: '/login', element: <Login></Login>},
            {path: '/profile', element: <PrivateRoute><Profile></Profile></PrivateRoute>}
        ]
    }
])