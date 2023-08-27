import { Form } from 'react-bootstrap';
import { useState } from 'react';
import DrugAndDrop from './DrugAndDrop';

const ImageToggle = ({ name }) => {
    const [isDisabled, setDisabled] = useState(false);

    const handleClick = () => {
      setDisabled(!isDisabled);
    };

    if (isDisabled) {
      return (
        <>
          <Form className="toggle-btn">
            <Form.Check
              type="switch"
              label={name}
              onClick={handleClick}
              active={isDisabled.toString()}
            />
          </Form>

          <DrugAndDrop />
        </>
      )
    };

    return (
        <Form className="toggle-btn">
          <Form.Check
            type="switch"
            label={name}
            onClick={handleClick}
            active={isDisabled.toString()}
          />
        </Form>
    );
};
 
export default ImageToggle;