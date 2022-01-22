import React from 'react';

function Registration()
{
   <>
   <div className="container  pb-3 s-12  ">
        <div className="row justify-content-center mt-5 mb-3">
          <h1 className="text-center mb-3 reg-had">Registration</h1>
          <h4 class="menu-reg pb-3"><span>Personal Info</span></h4>
          <div class="row g-3">
         <div class="col col-md-6">
         <input type="text" class="form-control send" placeholder="First name" aria-label="First name"/>
         <span className="focus-border"></span>
         </div>
         
         <div class="col col-md-6">
         <input type="text" class="form-control send" placeholder="Last name" aria-label="Last name"/>
         <span className="focus-border"></span>
        </div>
         </div>
         <div class="row g-3">
         <div class="col col-md-6">
         {/* <input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')" id="date"/> */}
         <input placeholder="Date Of Birth" className="form-control send textbox-n" type="text" onfocus="(this.type='date')" id="date"  aria-label="first name" required/>
         <span className="focus-border"></span>
         </div>
         
         <div class="col col-md-6">
         {/* <input type="text" class="form-control" placeholder="Gender" aria-label="Last name"/> */}
         <select class="form-select send" id="autoSizingSelect" placeholder="Gender">
         <span className="focus-border"></span>
      <option class="bg-none" selected>Gender</option>
      <option value="1">Female</option>
      <option value="2">Male</option>
      
    </select>
        </div>
         </div>
         <div class="row g-3">
         <div class="col col-md-6">
         
         <input type="email" class="form-control send" placeholder="Email" aria-label="First name"></input>
         <span className="focus-border"></span>
         
         </div>
       
         <div class="col col-md-6">
         <input type="text" class="form-control send" placeholder="Student Contact" aria-label="Last name"/>
         <span className="focus-border"></span>
        </div>
         </div>
         <div class="row g-3">
         <div class="col col-md-6">
         <input type="text" class="form-control send" placeholder="Father Name" aria-label="First name"/>
         <span className="focus-border"></span>
         </div>
         
         <div class="col col-md-6">
         <input type="text" class="form-control send" placeholder="Father Contact" aria-label="Last name"/>
         <span className="focus-border"></span>
        </div>
         </div>
         <div class="row g-3 ">
         <div class="col col-md-6">
         <input type="date" class="form-control send" placeholder="Join Date" aria-label="First name"/>
         <span className="focus-border"></span>
         </div>
         
         <div class="col col-md-6 mb-3">
         <input type="text" class="form-control send" placeholder="Aadhar Number" aria-label="Last name"/>
         <span className="focus-border"></span>
        </div>
         </div>
   
      </div>
      
        <div className="row justify-content-center">
      <button className="btn-next">Next</button>
      </div>
      </div>
    </>
}
export default Registration;