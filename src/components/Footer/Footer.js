import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div class='footer'>
      <div class="container p-4 pb-0">
        <div class="row">
          <div class="col-sm-3 ">
            <h6 class="text-uppercase mb-4 font-weight-bold text-white">
              Tiksom Limited Pvt
            </h6>
            <p class="text-white text-start ">
              Building world-class solutions is not a job, It’s our lifestyle,Tiksom has dedicated it’s time to sharing effective business
              strategies that help new businesses and entrepreneurs
              put their money to work in the right way.
            </p>

          </div>
          <div class="col-sm-3 ">
            <h6 class="text-uppercase mb-4 font-weight-bold text-white">SERVICES</h6>

            <p>
              <h6 class="text-white">MDBootstrap</h6>
            </p>
            <p>
              <h6 class="text-white">MDWordPress</h6>
            </p>
            <p>
              <h6 class="text-white">BrandFlow</h6>
            </p>
            <p>
              <h6 class="text-white">Bootstrap Angular</h6>
            </p>
          </div>
          <div class="col-sm-3 ">
            <h6 class="text-uppercase mb-4 font-weight-bold text-white">
              Useful links
            </h6>
            <p>
              <a href="#" class="text-white">Your Account</a>
            </p>
            <p>
              <a href="#" class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#" class="text-white ">Shipping Rates</a>
            </p>
            <p>
              <a href="#" class="text-white">Help</a>
            </p>
          </div>
          <div class="col-sm-3 ">
            <h6 class="text-uppercase mb-4 font-weight-bold text-white">Contact</h6>
            <p><i class="fas fa-home mr-3 text-white"> New York, NY 10012, US</i></p>
            <p><i class="fas fa-envelope mr-3 text-white"> info@gmail.com</i></p>
            <p><i class="fas fa-phone mr-3 text-white">+ 01 234 567 88</i></p>
            <p><i class="fas fa-print mr-3 text-white">+ 01 234 567 89</i></p>
          </div>

          <hr class="my-3 font-weight-bold text-white" />
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3 text-white">
              © 2020 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/"
              >MDBootstrap.com</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}