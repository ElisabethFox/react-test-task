import Form from 'react-bootstrap/Form';

const PostTextForm = ({ name, handleChange }) => {
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
                        onChange={(e) => handleChange('postText', e)}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default PostTextForm;