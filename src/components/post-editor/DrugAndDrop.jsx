import { Form } from "react-bootstrap";

const DrugAndDrop = () => {

  const handleChange = (e) => {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      localStorage.setItem('img', this.result);
    });

    reader.readAsDataURL(e.target.files[0]);
  };

    return (
    <Form.Group className="mb-3">
        <Form.Control
        type="file"
        onChange={handleChange}
        />
      </Form.Group>
    );
}
 
export default DrugAndDrop;