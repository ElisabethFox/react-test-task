import Form from 'react-bootstrap/Form';

const PostTextForm = ({ text }) => {
    const handleChange = (e) => {
        e.preventDefault();
        localStorage.setItem('Post Text', JSON.stringify(e.target.value))
    };

    return (
        <Form>
            <Form.Group className="">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        type="text"
                        name={text}
                        aria-label={text}
                        className="form"
                        placeholder={text}
                        onChange={handleChange}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default PostTextForm;