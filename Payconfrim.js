import React from 'react';
import './Payconfrim.css';

export const Payconfrim = () => {
  return <div>
      <div class="main">
          <h1 className="text-center pt-3 pb-3">Registration</h1>
          <h4 class="fees mb-5"><span>Fees Info</span></h4>
          <div class="form-check pay pb-5">
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
        <div class="paydiv mb-5">
            <h5>Thank you !!<br/>
            Four Your Time</h5>
        </div>
          <div className="row justify-content-center">
      <button className="next">Next</button>
      </div>
    </div>
    </div>
  
};
