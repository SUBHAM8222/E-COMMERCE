import React from "react";
import "./Contactus.css";
import { NavLink } from "react-router-dom";

const Contactus = () => {


  return (
    <React.Fragment>
    <header>
        <ul className="header">
        <li>
            <NavLink activeClassName="active" to="/Home">HOME</NavLink>
          </li>

          <NavLink to='/store'>STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
        <h1>THE GENERICS</h1>
      </header>

    <div class="form-style-6">
<h1>Contact Us</h1>
<form>
<input type="text" name="field1" placeholder="Your Name" />
<input type="email" name="field2" placeholder="Email Address" />
<input type="number" name="field3" placeholder="Contact number" />
<ul><button type='submit'>SEND</button></ul>

</form>
</div>
    {/* // <section className="container">
    //   <h2>CONTACT US</h2>
    //   <form className="contact-form">
    //     <div>
    //       <label id="Name" className="label">
    //         NAME
    //       </label>
    //       <input type="text" id="Name" className='input'></input>
    //     </div>
    //     <div>
    //       <label id="email" className="label">E-mail</label>
    //       <input type="email" id="email" className='input'></input>
    //     </div>
    //     <div>
    //       <label id="phone_number" className="label">Number</label>
    //       <input type="number" id="phone_number" className='input'></input>
    //     </div>
    //   </form>

    // </section> */}
</React.Fragment>    
  );
};

export default Contactus;
