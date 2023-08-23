import Form from 'react-bootstrap/Form';

const TitleForm = () => {
    return (
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
        </Form>
    );
}
 
export default TitleForm;