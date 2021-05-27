import React from "react";

const Login = () => {
  return (
    <div className="h-100 container">
      <div class="row row-1">
        <div class="col-sm-6 mt-5">
          <div class="card py-3 px-3">
            <div class="card-body">
              <form>
                <h5 class="mb-5">Sign In</h5>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" id="loginPassword" placeholder="Your Password Here" />
                  <button type="button" class="btn btn-primary mt-3" id="login-button">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mt-5">
          <div id="card-sign-up" class="card py-3 px-3">
            <div class="card-body">
              <form>
                <h5 class="mb-5">Sign Up</h5>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="name" class="form-control" id="signInName" placeholder="Your Username Here" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" id="signInEmail" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" id="signInPassword" placeholder="Your Password Here" />
                  <button type="button" class="btn btn-primary mt-3" id="signup-button">Sign Up</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;