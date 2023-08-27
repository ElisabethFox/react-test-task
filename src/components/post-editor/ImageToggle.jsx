import { Form } from 'react-bootstrap';
import { useState } from 'react';
import DrugAndDrop from './DrugAndDrop';

const ImageToggle = ({ title }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    };

    if (isActive) {
      return (
        <>
          <Form className="toggle-btn">
            <Form.Check
              type="switch"
              label={title}
              onClick={handleClick}
              active={isActive.toString()}
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
            label={title}
            onClick={handleClick}
            active={isActive.toString()}
          />
        </Form>
    );
};
 
export default ImageToggle;