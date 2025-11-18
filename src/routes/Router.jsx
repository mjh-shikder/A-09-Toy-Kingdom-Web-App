import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import HomePage from "../components/Pages/HomePage";
import ProfilePage from "../components/Pages/ProfilePage";
import ErrorPage from "../components/Pages/ErrorPage";
import DetailsCard from "../components/DetailsCard";
import Loading from "../components/Pages/Loading";
import AllToys from "../components/Pages/AllToys";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
                loader: () => fetch('./popular.json'), 
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/profile',
                element:<ProfilePage></ProfilePage>
            }
        ]
    }, 
    {
        path: '/card-details/:id',
        element: <DetailsCard></DetailsCard>,
        loader: () => fetch('./data.json'),
        hydrateFallbackElement: <Loading></Loading>,
        
    },
    {
        path: '/all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('./data.json'),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])