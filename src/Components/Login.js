import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Add your authentication logic here.
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="container mt-5">
          <h2 className="text-center">Login Form</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 mt-3">
              <div className="form-group">
                <label htmlFor="txtEmail">Email:</label>
                <input
                  type="email"
                  id="txtEmail"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 mt-3">
            
              <div className="form-group">
                <label htmlFor="txtPassword">Password:</label>
                <input
                  type="password"
                  id="txtPassword"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password should be 8 to 20 characters"
                />
              </div>
            </div>
          </div>


        

          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
