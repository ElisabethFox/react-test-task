import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const PostEditor = () => {
    return (
        <div className="post-container post-editor">
            <h1 className="post-editor__title">Settings</h1>
            
            <Form>

                <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name="title"
                        aria-label="Title"
                        className="form"
                        placeholder="Title"
                        //onChange={{}}
                    />
                </Form.Group>

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

            <ToggleButtonGroup name= "toggle" type="radio">
                <ToggleButton>

                </ToggleButton>

                <ToggleButton>
                    
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
 
export default PostEditor;