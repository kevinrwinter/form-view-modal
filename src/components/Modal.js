export default function Modal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>This is your note:</h2>
        <p>
          First name: <span>{props.firstName}</span>
        </p>
        <p>
          Last name: <span>{props.lastName}</span>
        </p>
        <p>
          Phone: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>

        <button onClick={props.submit}>Yes, I am sure</button>
        <button onClick={props.close}>No, I don't want to post</button>
      </div>
    </div>
  );
}
