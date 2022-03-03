import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Form() {


  return (
    <div class="margin-main ">
      <div class="countainer  mt-5">
        <form class="row rounded border bg-light border border-primary border border-5 d-flex align-items-center margin-bottom" >
          <div class="row mb-6 mt-5">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" > </input>
            </div>
          </div>
          <div class="row mb-6 mt-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Body</label>
            <div class="col-sm-10">
              <textarea type="email" class="form-control" id="inputEmail3" ></textarea>
            </div>
          </div>
          <div class="row mb-6 mt-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">All Tags</label>
            <div class="col-sm-2 col-form-label">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked></input>
              <label class="form-check-label" for="flexCheckChecked">
                Public
              </label>
            </div>
            <div class="col-sm-2 col-form-label">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" ></input>
              <label class="form-check-label" for="flexCheckChecked">
                Protected
              </label>
            </div>
            <div class="col-sm-2 col-form-label">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" ></input>
              <label class="form-check-label" for="flexCheckChecked">
                Private
              </label>
            </div>
            <div class="row mb-6 mt-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Category</label>
              <div class="btn-group col-sm-1 col-form-label">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div class="mt-2">
              <Button
                variant="contained"
                component={Link}
                type="Submit"
                to={""}

              >
                Submit
              </Button>
              <span class="random-class">
                <Button
                  variant="contained"
                  component={Link}
                  to={"/"}

                >
                  Back
                </Button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}