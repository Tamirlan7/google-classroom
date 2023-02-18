import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth/actions';
import { useTypedSelector } from '../hooks/redux';
import { getProfile } from '../actions/profile/action';

interface LayoutProps extends React.PropsWithChildren {
    checkAuthenticated: () => void
    getProfile: () => void
}

const Layout: React.FC<LayoutProps> = ({ getProfile, checkAuthenticated, children }) => {

    const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        checkAuthenticated();
        getProfile();
    }, [isAuthenticated])

    return (
        <>
            {children}
        </>
    );
}

export default connect(null, { checkAuthenticated, getProfile })(Layout);
