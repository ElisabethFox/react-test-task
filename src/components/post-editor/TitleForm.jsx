import Form from 'react-bootstrap/Form';
import usePostData from '../../hooks/usePostData';

const InputForm = ({ name }) => {
    const context = usePostData();
    const { setPostTitle } = context;

    const handleChange = (e) => {
        e.preventDefault();
        setPostTitle(e.target.value);
    };

    return (
        <Form>
            <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name={name}
                        aria-label='Title'
                        className="form"
                        placeholder={name}
                        onChange={handleChange}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default InputForm;