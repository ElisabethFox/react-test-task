import Form from 'react-bootstrap/Form';

const InputForm = ({ title }) => {
    const handleChange = (e) => {
        e.preventDefault();
        localStorage.setItem(title, JSON.stringify(e.target.value))
    };

    return (
        <Form>
            <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name={title}
                        aria-label={title}
                        className="form"
                        placeholder={title}
                        onChange={handleChange}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default InputForm;