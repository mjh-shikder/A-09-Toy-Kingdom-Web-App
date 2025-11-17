import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import HomePage from "../components/Pages/HomePage";
import ProfilePage from "../components/Pages/ProfilePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
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