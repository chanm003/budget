import { useEffect } from 'react';
import { withRouter } from "react-router-dom";

function ScrollToTop({ children, location }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
}

export default withRouter(ScrollToTop);