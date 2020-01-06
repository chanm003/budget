import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react';

import { useAuth } from './authContext';

export default (props) => {
    const { login } = useAuth();
    const iframe = useRef(null);
    const { protocol, hostname } = document.location;
    const cacURL = `${protocol}//${hostname}:7000`;

    useEffect(() => {
        window.onmessage = function (evt) {
            if (evt.origin === cacURL) {
                if (!evt.data.error) {
                    onLoginSuccess(evt.data);
                } else {
                    alert('Ensure your CAC card has been properly inserted into the reader.  If this error persists, please close all browsers.  Then re-insert your CAC card into the reader and return to this page.');
                }
            }
        }
    });

    const onLoginSuccess = (authData) => {
        login(authData);
        props.redirectUser();
    }

    const onCacLoginButtonClicked = () => {
        props.setRedirectPath();
        iframe.current.src = cacURL;
    }

    return (
        <React.Fragment>
            <Button color="blue" fluid size="large" onClick={onCacLoginButtonClicked}>
                Continue with your CAC Card
            </Button>
            <iframe src={props.src} ref={iframe} width="1000" style={{ display: 'none' }} />
        </React.Fragment>
    )
}
