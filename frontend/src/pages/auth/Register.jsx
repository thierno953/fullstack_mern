import React, { useState, useEffect } from "react";
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../redux/features/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password should match");
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input type="text" required name="firstName" placeholder='First Name' value={firstName} onChange={onInputChange} />
        <input type="text" required name="lastName" placeholder='Last Name' value={lastName} onChange={onInputChange} />
        <input type="email" required name="email" placeholder='Email' value={email} onChange={onInputChange} />
        <input type="password" required name="password" placeholder='Password' value={password} onChange={onInputChange} />
        <input type="password" required name="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={onInputChange} />
        <button className='btn btn-secondary'>
          Register
        </button>
        <br />
        <Link to="/login" style={{ fontSize: "12px" }}>
          <p>Already have an account ? Sign In</p>
        </Link>
      </form>
    </div>
  )
}

export default Register