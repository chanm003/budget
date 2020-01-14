import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react';

import { useAuth } from './authContext';
import { AuthenticationPayload } from '../../../interfaces';

interface Props {
    redirectUser: () => void;
    setRedirectPath: () => void;
}

const CacLoginButton: React.FC<Props> = props => {
    const { login } = useAuth();
    const iframe = useRef<HTMLIFrameElement>(null);
    const { protocol, hostname } = document.location;
    const cacURL = `${protocol}//${hostname}:7000`;

    useEffect(() => {
        window.onmessage = function(evt: MessageEvent) {
            if (evt.origin === cacURL) {
                if (!evt.data.error) {
                    onLoginSuccess(evt.data);
                } else {
                    alert(
                        'Ensure your CAC card has been properly inserted into the reader.  If this error persists, please close all browsers.  Then re-insert your CAC card into the reader and return to this page.',
                    );
                }
            }
        };
    });

    const onLoginSuccess = (authData: AuthenticationPayload) => {
        login(authData);
        props.redirectUser();
    };

    const onCacLoginButtonClicked = () => {
        props.setRedirectPath();
        if (iframe.current) {
            iframe.current.src = cacURL;
        }
    };

    return (
        <React.Fragment>
            <Button
                color="blue"
                fluid
                size="large"
                onClick={onCacLoginButtonClicked}
            >
                Continue with your CAC Card
            </Button>
            <iframe
                ref={iframe}
                title="cacLoginFrame"
                width="1000"
                style={{ display: 'none' }}
            />
        </React.Fragment>
    );
};

export default CacLoginButton;
