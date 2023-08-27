import { Form } from "react-bootstrap";
import usePostData from "../../hooks/usePostData";

const DrugAndDrop = () => {
  const { setPostImg } = usePostData();

  const handleChange = (e) => {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      setPostImg(this.result);
    });

    reader.readAsDataURL(e.target.files[0]);
  };

    return (
      <Form.Group className="mb-3 file-upload__wrapper">
        <p className="file-upload__text">Drop File here</p>
        <Form.Control
        type="file"
        accept="image/*"
        className="file-upload"
        onChange={handleChange}
        />
      </Form.Group>
    );
}
 
export default DrugAndDrop;