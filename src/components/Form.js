// import React from "react";

function Form(props) {
  return (
    <form onChange={props.change} onSubmit={props.submit}>
      <div className="form-group">
        <label htmlFor="firstname">First name:</label>
        <input type="text" name="firstname" id="firstname" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last name:</label>
        <input type="text" name="lastname" id="lastname" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select name="role" id="role" required>
          <option value="" invalid="true" hidden>
            --Please choose an option--
          </option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
      </div>
      <div className="form-group">
        <input className="submit-btn" type="submit" value="SEND" />
      </div>
    </form>
  );
}

export default Form;
