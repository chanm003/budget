import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react';
export default (props) => {
    const iframe = useRef(null);
    const { protocol, hostname } = document.location;
    const cacURL = `${protocol}//${hostname}:7000`;

    useEffect(() => {
        window.onmessage = function (evt) {
            if (evt.origin === cacURL) {
                props.onLoginSuccess(evt.data);
            }
        }
    });

    const onCacLoginButtonClicked = () => {
        props.onLoginButtonClicked();
        iframe.current.src = cacURL;
    }

    return (
        <React.Fragment>
            <Button color="blue" fluid size="large" onClick={onCacLoginButtonClicked}>
                Login with your CAC Card
            </Button>
            <iframe src={props.src} ref={iframe} width="1000" style={{ display: 'none' }} />
        </React.Fragment>
    )
}
