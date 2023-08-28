import { Form } from 'react-bootstrap';
import usePostData from '../../hooks/usePostData';
import useToggleData from '../../hooks/useToggleData';

const HeaderToggle = ({ name }) => {
  const { isHeaderToggleActive, setHeaderToggleActive } = useToggleData();
  const { setPostHeader } = usePostData();

  const handleClick = () => {
    setHeaderToggleActive(!isHeaderToggleActive);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPostHeader(e.target.value);
  };

  if (isHeaderToggleActive) {
    return (
      <>
        <Form className="toggle-btn">
          <Form.Check
            type="switch"
            label={name}
            onClick={handleClick}
            active={isHeaderToggleActive.toString()}
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
    );
  }

  return (
    <Form className="toggle-btn">
      <Form.Check
        type="switch"
        label={name}
        onClick={handleClick}
        active={isHeaderToggleActive.toString()}
      />
    </Form>
  );
};

export default HeaderToggle;
