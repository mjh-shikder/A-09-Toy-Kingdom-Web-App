import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import HomePage from "../components/Pages/HomePage";
import ProfilePage from "../components/Pages/ProfilePage";
import ErrorPage from "../components/Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
                
            },
            {
                path: '/profile',
                element:<ProfilePage></ProfilePage>
            }
        ]
    }
])