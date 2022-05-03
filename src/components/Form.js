// import React from "react";

// Destructured props
function Form({ change, submit, firstName, lastName, phone, role, message }) {
  return (
    <form onChange={change} onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="firstname">First name:</label>
        <input type="text" name="firstName" id="firstname" required defaultValue={firstName} />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last name:</label>
        <input type="text" name="lastName" id="lastname" required defaultValue={lastName} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" required defaultValue={phone} />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select name="role" id="role" required defaultValue={role}>
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
        <textarea name="message" id="message" required defaultValue={message}></textarea>
      </div>
      <div className="form-group">
        <input className="submit-btn" type="submit" value="SEND" />
      </div>
    </form>
  );
}

export default Form;
