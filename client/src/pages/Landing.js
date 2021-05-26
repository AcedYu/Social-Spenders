import React from "react";

const Landing = () => {
  return (
    <div className="h-100 container align-items-center">
      <div className="row align-items-center g-lg-5 py-5 h-100">
        <div className="col-lg-9">
          <img src="./img/socialspendersjumbo.png" className="d-block mx-lg-auto img-fluid" alt="Social Spenders" loading="lazy" />
        </div>
        <div className="col-md-10 col-lg-3">
          <form>
            <div className="form-floating mb-3">
              <label>Email address</label>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            </div>
            <div className="form-floating mb-3">
              <label>Password</label>
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
            <hr className="my-4" />
            <small className="text-muted">New to the site? Create a new account here!</small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;