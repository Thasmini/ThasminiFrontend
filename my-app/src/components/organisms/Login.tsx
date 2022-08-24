import React from "react";
import { useFormik } from "formik";
import AuthService from "../../service/AuthService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      AuthService().login(values).then((res) => navigate("/pets"));
    },
  });

  return (
    
    <div>


      <form onSubmit={formik.handleSubmit}>
        <div>
          <h1>Login</h1>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
