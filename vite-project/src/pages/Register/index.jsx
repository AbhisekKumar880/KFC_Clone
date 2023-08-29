import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

const Register = () => {

  const {handleSubmit, handleChange, handleReset, handleBlur, values, touched, errors} = useFormik({
      initialValues:{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        address:'',
        city:'',
        state:'',
        zip:'',
        


      },
      validationSchema:yup.object({
             firstName:yup.string().max(15,'Must be 15 characters or less').required('First Name Required'),
             lastName:yup.string().max(15,'Must be 15 characters or less').required('First Name Required'),
             email:yup.string().email('Invalid email address').required('pls Dont forget me'),
             password:yup.string().min(6,'Atleast 6 characters ').required('password is Required'),
             address:yup.string().required('Address is Required'),
             city:yup.string().required('city is Required'),
             state:yup.string().required('status is Required'),
             zip:yup.string().required('zip is Required'),
      }),
      onSubmit:(values)=>{
        console.log(values);


      }


  });
  return (
    <>
      <Header />
      <div className="lead-text" style={{ backgroundColor: "Yellow" }}>
        <h3>
          <b>NEW CUSTOMER</b>
        </h3>
      </div>
      <div className="register-wrapper ">
        <p>
          {" "}
          Already Registered? <Link to="/login">Login</Link>{" "}
        </p>
        <hr />
        <button className="btn btn-danger d-block w-100 mb-2">
          Login with Google
        </button>
        <button className="btn btn-primary d-block w-100">
          Login with Facebook
        </button>
        <hr />
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              FIRST NAME
            </label>
            <input type="text" onChange={handleChange} value={values.firstName} onBlur={handleBlur} name="firstName" className="form-control" id="firstName" />
            <p className="error">{errors.firstName}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              LAST NAME
            </label>
            <input type="text" onChange={handleChange} value={values.lastName} onBlur={handleBlur} name='lastName' className="form-control" id="lastName" />
            <p className="error">{errors.lastName}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email"  onChange={handleChange} value={values.email} onBlur={handleBlur} name="email" className="form-control" id="email" />
            <p className="error">{errors.email}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
             Password
            </label>
            <input
              type="password"  onChange={handleChange} value={values.password} onBlur={handleBlur} name="password"
              className="form-control"
              id="password"
            />
            <p className="error">{errors.password}</p>
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"  onChange={handleChange} value={values.address} onBlur={handleBlur} name="address"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
            />
            <p className="error">{errors.address}</p>
          </div>
         
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text"  onChange={handleChange} value={values.city} onBlur={handleBlur} name="city" className="form-control" id="city" />
            <p className="error">{errors.city}</p>
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select id="state"  onChange={handleChange} value={values.state} onBlur={handleBlur} name="state" className="form-select">
              <option>Choose...</option>
              <option>Bihar</option>
              <option>odisha</option>
              <option>jharkhand</option>
              <option>West Bengal</option>
            </select>
            <p className="error">{errors.state}</p>
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
            <input type="text" onChange={handleChange} value={values.zip} onBlur={handleBlur}  name='zip' className="form-control" id="zip" />
            <p className="error">{errors.zip}</p>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Register Now
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
