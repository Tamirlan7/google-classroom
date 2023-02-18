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
        path: '/profile',
        element: <Profile />,
        errorElement: <NotFound />,
    },
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />
    },
    {
        path: '/profile/name',
        element: <ProfileFormName />,
        errorElement: <NotFound />,
    },
    {
        path: '/profile/birthday',
        element: <ProfileFormBirthday />,
        errorElement: <NotFound />,
    },
    {
        path: '/profile/gender',
        element: <ProfileFormGender />,
        errorElement: <NotFound />,
    },
    {
        path: '/profile/phone',
        element: <ProfileFormPhone />,
        errorElement: <NotFound />,
    },
    {
        path: '/profile/personal-address',
        element: <ProfileFormPersonalAddress />,
        errorElement: <NotFound />,
    },
    {
        path: '/profile/business-address',
        element: <ProfileFormBusinessAddress />,
        errorElement: <NotFound />,
    },
    {
        path: '/profile/other-addresses',
        element: <ProfileFormOtherAddresses />,
        errorElement: <NotFound />
    },
    {
        path: '/profile/email',
        element: <ProfileFormEmail />,
        errorElement: <NotFound />
    },
    {
        path: '/profile/name/edit',
        element: <ProfileEditName />,
        errorElement: <NotFound />
    },
    {
        path: '/profile/nickname/edit',
        element: <ProfileEditNickname />,
        errorElement: <NotFound />
    },
    {
        path: '/profile/phone/edit',
        element: <ProfileEditPhone />,
        errorElement: <NotFound />
    },
])


export default router;
