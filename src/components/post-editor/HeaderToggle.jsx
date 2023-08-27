import { Form } from 'react-bootstrap';
import { useState } from 'react';
import usePostData from '../../hooks/usePostData';

const HeaderToggle = ({ name }) => {
    const [isDisabled, setDisabled] = useState(false);
    const { setPostHeader } = usePostData();

    const handleClick = () => {
      setDisabled(!isDisabled);

        if(!isDisabled) {
          setPostHeader(name);
        } else {
          setPostHeader('');
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setPostHeader(e.target.value);
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

          <Form>
            <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name={name}
                        aria-label={name}
                        className="form"
                        placeholder={name}
                        onChange={handleChange}
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
            active={isDisabled.toString()}
          />
        </Form>
    );
};
 
export default HeaderToggle;