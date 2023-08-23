import Form from 'react-bootstrap/Form';

const PostEditor = () => {
    return (
        <div className="post-container post-editor">
            <h1 className="post-editor__title">Settings</h1>
            
            <Form>

            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Some post text" />
            </Form.Group>

            </Form>

        </div>
    );
}
 
export default PostEditor;