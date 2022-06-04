import React, { useState, useEffect } from "react";
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import { googleSignIn, login } from "../../redux/features/authSlice";

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const { email, password } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const devEnv = process.env.NODE_ENV !== "production";
    const clientId = devEnv
        ? "775610265870-jrviknc8jp1vi312s9nkaodn1t6pt2pa.apps.googleusercontent.com"
        : "775610265870-qfavcngfue4i61ld5344sce2gftb103i.apps.googleusercontent.com";

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(login({ formValue, navigate, toast }));
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const googleSuccess = (resp) => {
        const email = resp?.profileObj?.email;
        const name = resp?.profileObj?.name;
        const token = resp?.tokenId;
        const googleId = resp?.googleId;
        const result = { email, name, token, googleId };
        dispatch(googleSignIn({ result, navigate, toast }));
    };
    const googleFailure = (error) => {
        toast.error(error);
    };


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type="email" required name="email" placeholder='Email' value={email} onChange={onInputChange} />
                <input type="password" required name="password" placeholder='Password' value={password} onChange={onInputChange} />

                <button className='btn btn-secondary'>
                    Login
                </button>
                <br />
                <GoogleLogin
                    clientId={clientId}
                    render={(renderProps) => (
                        <button
                            className='btn btn-primary'
                            style={{ display: "none" }}
                            color="danger"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            Google Sign In
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
     
                <Link to="/register" style={{ fontSize: "12px" }}>
                    <p>Don't have an account ? Sign Up</p>
                </Link>
            </form>
        </div>
    )
}

export default Login