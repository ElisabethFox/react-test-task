import Form from 'react-bootstrap/Form';

const InputForm = ({ name }) => {
    return (
        <Form>
            <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name={name}
                        aria-label={name}
                        className="form"
                        placeholder={name}
                        //onChange={{}}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default InputForm;