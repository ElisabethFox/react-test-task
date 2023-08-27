import { Form } from 'react-bootstrap';
import { useState } from 'react';

const HeaderToggle = ({ name, handleChange }) => {
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
              label={name}
              onClick={handleClick}
              active={isActive.toString()}
            />
          </Form>

          <Form>
            <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name={name}
                        aria-label={name}
                        className="form"
                        placeholder={name}
                        onChange={(e) => handleChange('header', e)}
                    />
            </Form.Group>
          </Form>
        </>
      )
    };

    return (
        <Form className="toggle-btn">
          <Form.Check
            type="switch"
            label={name}
            onClick={handleClick}
            active={isActive.toString()}
          />
        </Form>
    );
};
 
export default HeaderToggle;