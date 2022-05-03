export default function Modal({ firstName, lastName, phone, role, message, submit, close }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>This is your note:</h2>
        <p>
          First name: <span>{firstName}</span>
        </p>
        <p>
          Last name: <span>{lastName}</span>
        </p>
        <p>
          Phone: <span>{phone}</span>
        </p>
        <p>
          Role: <span>{role}</span>
        </p>
        <p>
          Message: <span>{message}</span>
        </p>

        <button onClick={submit}>Yes, I am sure</button>
        <button onClick={close}>No, I don't want to post</button>
      </div>
    </div>
  );
}
