import React, { Button } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'reactfire';
import firebase from 'firebase'
import 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


const LoginPage = () => {

    const loginProvider = new firebase.auth.GoogleAuthProvider();
    const auth = useAuth();
    const [username, setUsername] = useState("")
    const [passowrd, setPassword] = useState("")

    const handleLogin = (evt) => {
        evt.preventDefault()
        auth.signInWithEmailAndPassword(username, passowrd).then(() => {
            window.Messenger.options = {
                extraClasses: 'messenger-fixed messenger-on-top  messenger-on-right',
                theme: 'flat',
                messageDefaults: {
                    showCloseButton: true,
                    hideAfter: 5
                },
                type: "success"
            }
            window.Messenger().post({
                message: 'Bienvenido',
                type: 'success'
            });
        })
    }

    const onChangeUsername = (evt) => {
        setUsername(evt.target.value)
    }

    const onChangePassword = (evt) => {
        setPassword(evt.target.value)
    }

    const handleRegister = (evt) => {
        evt.preventDefault()
        auth.signInWithPopup(loginProvider).then(() => {
            console.log("User Logged....");
        });
    }

    return (
        <div className="container-fluid px-3">
            <div className="row min-vh-100">
                <div className="col-md-5 col-lg-6 col-xl-4 px-lg-5 d-flex align-items-center">
                    <div className="w-100 py-5">
                        <div className="text-center">
                            <img src="/logo.png" alt="..." style={{
                                maxWidth: "10rem"
                            }} className="img-fluid mb-4" />
                            <h1 className="display-4 mb-3">Sign in</h1>
                        </div>
                        <form className="form-validate">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input value={username} onChange={onChangeUsername} name="loginUsername" type="email" placeholder="name@address.com" autoComplete="false" required data-msg="Please enter your email" className="form-control" />
                            </div>
                            <div className="form-group mb-4">
                                <div className="row">
                                    <div className="col">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-auto"><Link to="#" className="form-text small text-muted">Forgot password?</Link></div>
                                </div>
                                <input value={passowrd} onChange={onChangePassword} name="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" className="form-control" />
                            </div>
                            <button className="btn btn-lg btn-block btn-primary mb-3" onClick={handleLogin}>Sign in</button>
                            <p className="text-center"><small className="text-muted text-center">Don't have an account yet?
                            <button onClick={handleRegister} className="btn btn-link text-muted">Register</button>.</small></p>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">

                    <div style={{
                        backgroundImage: "url(/theme/img/photos/victor-ene-1301123-unsplash.jpg)"
                    }} className="bg-cover h-100 mr-n3"></div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage