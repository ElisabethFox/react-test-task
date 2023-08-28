import { Form } from 'react-bootstrap';
import useDrugAndDrop from '../../hooks/useDrugAndDrop';

const DrugAndDrop = () => {
  return (
    <Form.Group className="mb-3 file-upload__wrapper">
      <p className="file-upload__text">Drop File Here</p>
      <Form.Control
        type="file"
        accept="image/*"
        className="file-upload"
        onChange={useDrugAndDrop()}
      />
    </Form.Group>
  );
};

export default DrugAndDrop;
