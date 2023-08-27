import Form from 'react-bootstrap/Form';
import usePostData from '../../hooks/usePostData';

const PostTextForm = ({ name }) => {
    const { setPostText } = usePostData();

    const handleChange = (e) => {
        e.preventDefault();
        setPostText(e.target.value);
    };

    return (
        <Form>
            <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        type="text"
                        name={name}
                        aria-label={name}
                        className="form"
                        placeholder='Some Post Text'
                        onChange={handleChange}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default PostTextForm;