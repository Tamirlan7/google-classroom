import Main from '../pages/Main/Main';
import NotFound from '../components/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import ProfileForm from '../pages/Profile/ProfileForms/ProfileForm';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoutes from '../components/PrivateRoutes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';


const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: '/profile',
                element: <Profile />,
                errorElement: <NotFound />,
                children: [
                    {
                        path: '/profile/name',
                        element: <ProfileForm />
                    }
                ]
            },
            {
                path: '/',
                element: <Main />,
                errorElement: <NotFound />
            },
        ]
    }
])


export default router;
