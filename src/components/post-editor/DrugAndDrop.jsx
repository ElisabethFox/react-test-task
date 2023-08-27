import { Form } from "react-bootstrap";
import usePostData from "../../hooks/usePostData";

const DrugAndDrop = () => {
  const context = usePostData();
  const { currentPostData, setPostData } = context;

  const handleChange = (e) => {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      localStorage.setItem('img', JSON.stringify(this.result));
      setPostData({...currentPostData, 'img': this.result});
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