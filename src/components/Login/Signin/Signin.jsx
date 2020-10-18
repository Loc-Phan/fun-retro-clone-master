import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Recaptcha from 'react-recaptcha';
import "./Signin.scss";

Signin.propTypes = {

};

Signin.defaultProps = {}


function Signin(props) {
    const callback = () => {
        console.log("callback: ");
    }
    return (
        <div className="sign-in">
            <Form className="sign-in__form">
                <Label className="sign-in__form--label">Login</Label>
                <FormGroup className="sign-in__form--group">
                    {/* <Input className="input" type="email" name="email" placeholder="Your email" /> */}
                    <input className="input" type="email" name="email" placeholder="Your email" />
                </FormGroup>
                <FormGroup className="sign-in__form--group">
                    {/* <Input className="input" type="password" name="password" placeholder="Password" /> */}
                    <input className="input" type="password" name="password" placeholder="Password" />
                    <a className="forgot-password" href="#">Forgot Password?</a>
                </FormGroup>
                <FormGroup className="sign-in__form--re-captcha">
                    <Recaptcha
                        sitekey="6LdTv9gZAAAAAAYiMzq1jKriQ2dtPQZw82GeskDn"
                        render="explicit"
                        onloadCallback={callback}
                    />
                </FormGroup>
                <FormGroup className="sign-in__form--btn">
                    <Button className="login" type="submit">Login</Button>
                </FormGroup>
                <FormGroup className="sign-in__form--btn">
                    <Button className="loginGg">Google Login</Button>
                </FormGroup>
            </Form>
        </div >
    );
}

export default Signin;
