import { Form } from 'react-bootstrap';
import { useState } from 'react';

const Toggle = ({ title }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
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
}
 
export default Toggle;