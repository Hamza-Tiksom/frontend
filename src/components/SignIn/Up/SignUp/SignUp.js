import React from 'react'
import './signup.css';
export default function SignUp() {

  return (


    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5">SignUp</h2>
            <div class="card m-5 p-3 mb-2 bg-primary text-white">
              <form >
                <div class="text-center">
                  <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px" alt="profile"></img>
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="Email" aria-describedby="emailHelp"
                    placeholder="Email"></input>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password" placeholder="password"></input>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="check_password" placeholder="Confirm password"></input>
                </div>
                <div class="text-center"><button type="submit" class="btn btn-dark px-5 mb-5 w-100">Sign Up</button></div>
                <div id="emailHelp" class="form-text text-center mb-5 badge bg-primary text-Dark"><h6>If you are already
                  Registered? </h6><a href="/signin" class="badge bg-primary text-Dark fw-bold"> <h6>Sign In</h6></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
