import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth/actions';
import { UseTypedSelector } from '../hooks/redux';

interface LayoutProps extends React.PropsWithChildren {
    checkAuthenticated: () => void
}

const Layout: React.FC<LayoutProps> = ({ checkAuthenticated, children }) => {

    useEffect(() => {
        checkAuthenticated();
    }, [])

    return (
        <>
            {children}
        </>
    );
}

export default connect(null, { checkAuthenticated })(Layout);
