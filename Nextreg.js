import React from "react";
import "./Nextreg.css";
export const Nextreg = () => {
  return (
    <div>
     
        <div class="main">
          <h1 className="text-center pt-3 pb-3">Registration</h1>
          <h4 class="fees mb-5"><span>Fees Info</span></h4>
          <div class="form-check pay">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Pay Fees
            </label>
          </div>
          <div class="form-check pay">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label mb-5" for="flexRadioDefault2">
              Part Of Any Scholarships
            </label>
          </div>
          <div className="row justify-content-center">
      <button className="next">Next</button>
      </div>
    </div>
    </div>
  );
};
