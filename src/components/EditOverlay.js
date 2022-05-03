import Form from "./Form";

const EditOverlay = (props) => {
  return (
    <div className="overlay">
      <Form {...props} />
    </div>
  );
};

export default EditOverlay;

// values from object

// 1 open overlay
// 2. edit on change
// 3. post data
