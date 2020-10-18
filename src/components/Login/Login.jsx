import React from 'react';
import PropTypes from 'prop-types';
import Signin from './Signin/Signin';
import { Label } from 'reactstrap';
import "./Login.scss";

Login.propTypes = {

};

function Login(props) {
    return (
        <div className="login">
            <Label className="login__label">FunRetro</Label>
            <Signin></Signin>
        </div>
    );
}

export default Login;