import { Form } from "react-bootstrap";
import "./styleInputField.css";

const InputField = ({ search, setSearch }) => {
  return (
    <Form className="centered-object">
      <Form.Group>
        <Form.Label>Use Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search For Products..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default InputField;
