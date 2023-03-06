import Main from '../pages/Main/Main';
import NotFound from '../components/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ProfileFormName from '../pages/Profile/ProfileForms/ProfileFormName';
import ProfileFormBirthday from '../pages/Profile/ProfileForms/ProfileFormBirthday';
import ProfileFormGender from '../pages/Profile/ProfileForms/ProfileFormGender';
import ProfileFormPhone from '../pages/Profile/ProfileForms/ProfileFormPhone';
import ProfileFormPersonalAddress from '../pages/Profile/ProfileForms/ProfileFormPersonalAddress';
import ProfileFormBusinessAddress from '../pages/Profile/ProfileForms/ProfileFormBusinessAddress';
import ProfileFormOtherAddresses from '../pages/Profile/ProfileForms/ProfileFormOtherAddresses';
import ProfileFormEmail from '../pages/Profile/ProfileForms/ProfileFormEmail';
import ProfileEditName from '../pages/Profile/ProfileEdit/ProfileEditName';
import ProfileEditNickname from '../pages/Profile/ProfileEdit/ProfileEditNickname';
import ProfileEditPhone from '../pages/Profile/ProfileEdit/ProfileEditPhone';
import Room from '../pages/Room/Room';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/room/:code',
        element: <Room />,
        errorElement: <NotFound />
    },

    // PROFILE

    {
        path: '/profile',
        children: [
            {
                index: true,
                element: <Profile />,
                errorElement: <NotFound />,
            },
            {
                path: '/profile/name',
                element: <ProfileFormName />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/birthday',
                element: <ProfileFormBirthday />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/gender',
                element: <ProfileFormGender />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/phone',
                element: <ProfileFormPhone />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/personal-address',
                element: <ProfileFormPersonalAddress />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/business-address',
                element: <ProfileFormBusinessAddress />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/other-addresses',
                element: <ProfileFormOtherAddresses />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/email',
                element: <ProfileFormEmail />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/phone/edit',
                element: <ProfileEditPhone />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/name/edit',
                element: <ProfileEditName />,
                errorElement: <NotFound />,
                index: true,
            },
            {
                path: '/profile/nickname/edit',
                element: <ProfileEditNickname />,
                errorElement: <NotFound />,
                index: true,
            },
        ]
    },
])


export default router;
