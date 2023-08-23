import Form from 'react-bootstrap/Form';

const PostTextForm = () => {
    return (
        <Form>
            <Form.Group className="">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        type="text"
                        name="title"
                        aria-label="Title"
                        className="form"
                        placeholder="Some post text"
                        //onChange={{}}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default PostTextForm;