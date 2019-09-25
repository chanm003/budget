import React from 'react';

class Login extends React.Component {
    state = {
        redirectToReferer: false
    }

    render() {
        const { redirectedFrom } = this.props.location.state || { redirectedFrom: { pathname: '/' } };
        console.log(redirectedFrom);
        return (
            <div>Login button relo</div>
        );
    }
}

export default Login;