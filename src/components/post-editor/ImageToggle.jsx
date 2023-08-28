import { Form } from 'react-bootstrap';
import DrugAndDrop from './DrugAndDrop';
import useToggleData from '../../hooks/useToggleData';

const ImageToggle = ({ name }) => {
  const { isImgToggleActive, setImgToggleActive } = useToggleData();

  const handleClick = () => {
    setImgToggleActive(!isImgToggleActive);
  };

  if (isImgToggleActive) {
    return (
      <>
        <Form className="toggle-btn">
          <Form.Check
            type="switch"
            label={name}
            onClick={handleClick}
            active={isImgToggleActive.toString()}
          />
        </Form>

        <DrugAndDrop />
      </>
    );
  }

  return (
    <Form className="toggle-btn">
      <Form.Check
        type="switch"
        label={name}
        onClick={handleClick}
        active={isImgToggleActive.toString()}
      />
    </Form>
  );
};

export default ImageToggle;
