import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop: React.FC = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return <>{children}</>;
};

export default ScrollToTop;
