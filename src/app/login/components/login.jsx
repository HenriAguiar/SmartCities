import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <button className="btn btn-danger login-google">Login with Google</button>
    </div>
  );
};

export default Login;
