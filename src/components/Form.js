import React from "react";

function Form(props) {
  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="firstname">First name:</label>
        <input type="text" name="firstname" id="first-name" />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last name:</label>
        <input type="text" name="lastname" id="last-name" />
      </div>
      <div className="form-group">
        <label htmlFor="phonenumber">Phone:</label>
        <input type="tel" name="phonenumber" id="phone-number" />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select name="role" id="role">
          <option value="">--Please choose an option--</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <div className="form-group">
        <input className="submit-btn" type="submit" value="SEND" />
      </div>
    </form>
  );
}

export default Form;
